package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.ClientDto;
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
    public List<ClientDto> getAll() {
        return iClientService.getAll();
    }

    @GetMapping("/getById/{id}")
    public ClientDto getById(@PathVariable("id") Long id) {
        return iClientService.getById(id);
    }

    @PostMapping("/create")
    public ClientDto create(@RequestBody ClientEntity client){
        return iClientService.create(client);
    }

    @PutMapping("/updateAll/{id}")
    public ClientDto updateAll(@PathVariable("id") Long id, @RequestBody ClientEntity client) {
        return iClientService.updateAllField(id, client);
    }

    @PatchMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        iClientService.deleteById(id);
    }
}
