package com.karmelshoes.web.controller;

import com.karmelshoes.domain.service.IClientService;
import com.karmelshoes.persistency.entity.ClientEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {

    private final IClientService iClientService;

    public ClientController(IClientService iClientService) {
        this.iClientService = iClientService;
    }

    @GetMapping("/getAll")
    public List<ClientEntity> getAll() {
        return iClientService.getAll();
    }

    @PostMapping("/create")
    public ClientEntity create(@RequestBody ClientEntity client){
        return iClientService.create(client);
    }
}
