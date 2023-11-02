package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.ProductDto;
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
    public List<ProductDto> getAll() {
        return iProductService.getAll();
    }

    @GetMapping("/getById/{id}")
    public ProductDto getById(@PathVariable("id") Long id) {
        return iProductService.getById(id);
    }

    @PostMapping("/create")
    public ProductDto create(@RequestBody ProductEntity product) {
        return iProductService.create(product);
    }

    @PutMapping("/update/{id}")
    public ProductDto updateAll(@PathVariable("id") Long id, @RequestBody ProductEntity product) {
        return iProductService.updateAllFields(id, product);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id) {
        iProductService.deleteById(id);
    }

    @PatchMapping("/updateImg/{id}")
    public ProductDto updateFieldImg(@PathVariable("id") Long id,  @RequestBody String img) {
        return iProductService.updateFieldImg(id, img);
    }

    @PatchMapping("/updateSize/{id}")
    public ProductDto updateFieldSizes(@PathVariable("id") Long id,  @RequestBody List<Integer> sizes) {
        return iProductService.updateFieldSizes(id, sizes);
    }
}
