package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.ClientDto;
import com.karmelshoes.domain.service.IClientService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.RoleEntity;
import com.karmelshoes.persistency.errors.exception.DataIntegrityViolationExceptionPersonality;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import com.karmelshoes.persistency.mappers.IClientMapper;
import com.karmelshoes.persistency.repository.IClientRepository;
import com.karmelshoes.persistency.repository.IRoleRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ClientServiceImpl implements IClientService {

    private final IClientRepository iClientRepository;
    private final IClientMapper iClientMapper;
    private final IRoleRepository iRoleRepository;
    private final PasswordEncoder passwordEncoder;

    public ClientServiceImpl(IClientRepository iClientRepository,
                             IClientMapper iClientMapper, IRoleRepository iRoleRepository, PasswordEncoder passwordEncoder) {
        this.iClientRepository = iClientRepository;
        this.iClientMapper = iClientMapper;
        this.iRoleRepository = iRoleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional(readOnly = true)
    @Override
    public List<ClientDto> getAll() {
        return iClientRepository.findAll()
                .stream()
                .map(iClientMapper::clientEntityToClientDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    @Override
    public ClientDto getById(Long id) {
        Optional<ClientEntity> client = iClientRepository.findById(id);
        if (client.isPresent()) {
            return iClientMapper.clientEntityToClientDto(client.get());
        }
        throw new ObjectNotFoundException("Cliente no encontrado con el ID: " + id);
    }

    @Transactional(readOnly = false)
    @Override
    public ClientDto create(ClientEntity clientEntity) {

        try {
            clientEntity.setStatus(true);
            List<RoleEntity> roles = getRoles(clientEntity);
            clientEntity.setRoles(roles);
            clientEntity.setPassword(passwordEncoder.encode(clientEntity.getPassword()));
            return iClientMapper.clientEntityToClientDto(iClientRepository.save(clientEntity));
        } catch (DataIntegrityViolationException exception) {
            throw new DataIntegrityViolationExceptionPersonality("No se puede crear el clinte por que el email:" + clientEntity.getEmail() + " ya existe");
        }
    }

    @Transactional(readOnly = false)
    @Override
    public ClientDto updateAllField(Long id, ClientEntity client) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            ClientEntity clientEntity = clientOptional.get();
            clientEntity.setName(client.getName());
            clientEntity.setEmail(client.getEmail());
            clientEntity.setAddress(client.getAddress());
            clientEntity.setPhone(client.getPhone());
            clientEntity.setAdmin(client.getAdmin());
            clientEntity.setPassword(passwordEncoder.encode(client.getPassword()));
            return iClientMapper.clientEntityToClientDto(iClientRepository.save(clientEntity));
        }
        throw new ObjectNotFoundException("Cliente no encontrado con el ID: " + id);
    }

    @Transactional(readOnly = false)
    @Override
    public void deleteById(Long id) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            ClientEntity client = clientOptional.get();
            client.setStatus(false);
            iClientRepository.save(client);
        } else {
            throw new ObjectNotFoundException("Cliente no encontrado con el ID: " + id);
        }
    }

    private List<RoleEntity> getRoles(ClientEntity user) {
        List<RoleEntity> roles = new ArrayList<>();
        Optional<RoleEntity> roleUser = iRoleRepository.findByName("ROLE_USER");

        if(roleUser.isPresent()) {
            roles.add(roleUser.orElseThrow());
        }

        if (Boolean.TRUE.equals(user.getAdmin())) {
            Optional<RoleEntity> roleAdmin = iRoleRepository.findByName("ROLE_ADMIN");
            if (roleAdmin.isPresent()) {
                roles.add(roleAdmin.orElseThrow());
            }
        }
        return roles;
    }
}
