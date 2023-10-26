package com.karmelshoes.domain.service;

import com.karmelshoes.persistency.entity.ClientEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IClientService {
    List<ClientEntity> getAll();
    ClientEntity create(ClientEntity clientEntity);
}
