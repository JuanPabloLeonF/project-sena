package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.ProductDto;
import com.karmelshoes.domain.service.IProductService;
import com.karmelshoes.persistency.entity.ProductEntity;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
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
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody List<ProductDto> getAll() {
        return iProductService.getAll();
    }

    @GetMapping("/getById/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public @ResponseBody ProductDto getById(@PathVariable("id") Long id) {
        return iProductService.getById(id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public @ResponseBody ProductDto create(@Valid @RequestBody ProductEntity product) {
        return iProductService.create(product);
    }

    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ProductDto updateAll(@PathVariable("id") Long id, @Valid @RequestBody ProductEntity product) {
        return iProductService.updateAllFields(id, product);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable("id") Long id) {
        iProductService.deleteById(id);
    }

    @PatchMapping("/updateImg/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ProductDto updateFieldImg(@PathVariable("id") Long id, @Valid @RequestBody String img) {
        return iProductService.updateFieldImg(id, img);
    }

    @PatchMapping("/updateSize/{id}")
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody ProductDto updateFieldSizes(@PathVariable("id") Long id, @Valid @RequestBody List<Integer> sizes) {
        return iProductService.updateFieldSizes(id, sizes);
    }
}
