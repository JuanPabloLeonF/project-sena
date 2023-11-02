package com.karmelshoes.domain.service;

import com.karmelshoes.domain.dto.ClientDto;
import com.karmelshoes.persistency.entity.ClientEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IClientService {
    List<ClientDto> getAll();
    ClientDto getById(Long id);
    ClientDto create(ClientEntity clientEntity);
    ClientDto updateAllField(Long id, ClientEntity client);
    void deleteById(Long id);
}
