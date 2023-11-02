package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.ClientDto;
import com.karmelshoes.domain.service.IClientService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.mappers.IClientMapper;
import com.karmelshoes.persistency.repository.IClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ClientServiceImpl implements IClientService {

    private final IClientRepository iClientRepository;
    private final IClientMapper iClientMapper;

    public ClientServiceImpl(IClientRepository iClientRepository,
                             IClientMapper iClientMapper) {
        this.iClientRepository = iClientRepository;
        this.iClientMapper = iClientMapper;
    }

    @Override
    public List<ClientDto> getAll() {
        return iClientRepository.findAll()
                .stream()
                .map(iClientMapper::clientEntityToClientDto)
                .collect(Collectors.toList());
    }

    @Override
    public ClientDto getById(Long id) {
        Optional<ClientEntity> client = iClientRepository.findById(id);
        if (client.isPresent()) {
            return iClientMapper.clientEntityToClientDto(client.get());
        }
        return null;
    }

    @Override
    public ClientDto create(ClientEntity clientEntity) {
        clientEntity.setStatus(true);
        return iClientMapper.clientEntityToClientDto(iClientRepository.save(clientEntity));
    }

    @Override
    public ClientDto updateAllField(Long id, ClientEntity client) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            ClientEntity clientEntity = clientOptional.get();
            clientEntity.setName(client.getName());
            clientEntity.setEmail(client.getEmail());
            clientEntity.setAddress(client.getAddress());
            clientEntity.setPhone(client.getPhone());
            return iClientMapper.clientEntityToClientDto(iClientRepository.save(clientEntity));
        }
        return null;
    }

    @Override
    public void deleteById(Long id) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            ClientEntity client = clientOptional.get();
            client.setStatus(false);
            iClientRepository.save(client);
        }
    }
}
