package com.karmelshoes.domain.security;

import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.repository.IClientRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JpaUserDetailsService implements UserDetailsService {

    private final IClientRepository iClientRepository;

    public JpaUserDetailsService(IClientRepository iClientRepository) {
        this.iClientRepository = iClientRepository;
    }


    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {

        Optional<ClientEntity> userFind = iClientRepository.findByEmail(userEmail);

        if(!userFind.isPresent()) {
            throw new UsernameNotFoundException(userEmail + " no existe en el sistema");
        } else {

            ClientEntity userEntity = userFind.orElseThrow();
            List<GrantedAuthority> authorities = userEntity.getRoles()
                    .stream()
                    .map(role -> new SimpleGrantedAuthority(role.getName()))
                    .collect(Collectors.toList());

            return new User(
                    userEntity.getName(),
                    userEntity.getEmail(),
                    true,
                    true,
                    true,
                    true,
                    authorities
            );
        }
    }
}
