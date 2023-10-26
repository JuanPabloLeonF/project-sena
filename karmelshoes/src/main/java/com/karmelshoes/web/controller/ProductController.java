package com.karmelshoes.web.controller;

import com.karmelshoes.domain.service.IProductService;
import com.karmelshoes.persistency.entity.ProductEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final IProductService iProductService;

    public ProductController(IProductService iProductService) {
        this.iProductService = iProductService;
    }

    @GetMapping("/getAll")
    public List<ProductEntity> getAll() {
        return iProductService.getAll();
    }

    @PostMapping("/create")
    public ProductEntity create(@RequestBody ProductEntity product) {
        return iProductService.create(product);
    }
}
