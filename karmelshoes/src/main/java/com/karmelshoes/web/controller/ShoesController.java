package com.karmelshoes.web.controller;

import com.karmelshoes.domain.service.IShoesService;
import com.karmelshoes.persistency.entity.ShoesEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shoes")
public class ShoesController {

    private final IShoesService iShoesService;

    public ShoesController(IShoesService iShoesService) {
        this.iShoesService = iShoesService;
    }

    @GetMapping("/getAll")
    public List<ShoesEntity> getAll() {
        return iShoesService.getAll();
    }

    @PostMapping("/create")
    public ShoesEntity create(@RequestBody ShoesEntity shoes) {
        return iShoesService.create(shoes);
    }
}
