package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.IClientService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.repository.IClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public ClientEntity create(ClientEntity clientEntity) {
        return iClientRepository.save(clientEntity);
    }
}
