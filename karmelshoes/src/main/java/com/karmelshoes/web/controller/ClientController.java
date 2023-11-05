package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.ClientDto;
import com.karmelshoes.domain.service.IClientService;
import com.karmelshoes.persistency.entity.ClientEntity;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:5173")
public class ClientController {

    private final IClientService iClientService;

    public ClientController(IClientService iClientService) {
        this.iClientService = iClientService;
    }

    @GetMapping("/getAll")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<ClientDto> getAll() {
        return iClientService.getAll();
    }

    @GetMapping("/getById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ClientDto getById(@PathVariable("id") Long id) {
        return iClientService.getById(id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody ClientDto create(@Valid @RequestBody ClientEntity client) {
        return iClientService.create(client);
    }

    @PutMapping("/updateAll/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ClientDto updateAll(@PathVariable("id") Long id,@Valid @RequestBody ClientEntity client) {
        return iClientService.updateAllField(id, client);
    }

    @PatchMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable("id") Long id) {
        iClientService.deleteById(id);
    }
}
