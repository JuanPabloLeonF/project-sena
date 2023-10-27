package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.IClientService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.repository.IClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements IClientService {

    private final IClientRepository iClientRepository;

    public ClientServiceImpl(IClientRepository iClientRepository) {
        this.iClientRepository = iClientRepository;
    }

    @Override
    public List<ClientEntity> getAll() {
        return iClientRepository.findAll();
    }

    @Override
    public ClientEntity getById(Long id) {
        Optional<ClientEntity> client = iClientRepository.findById(id);
        if (client.isPresent()) {
            return client.get();
        }
        return null;
    }

    @Override
    public ClientEntity create(ClientEntity clientEntity) {
        return iClientRepository.save(clientEntity);
    }

    @Override
    public ClientEntity updateAllField(Long id, ClientEntity client) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            ClientEntity clientEntity = clientOptional.get();
            clientEntity.setName(client.getName());
            clientEntity.setEmail(client.getEmail());
            clientEntity.setAddress(client.getAddress());
            clientEntity.setPhone(client.getPhone());
            return iClientRepository.save(clientEntity);
        }
        return null;
    }

    @Override
    public void deleteById(Long id) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        if (clientOptional.isPresent()) {
            iClientRepository.deleteById(clientOptional.get().getId());
        }
    }
}
