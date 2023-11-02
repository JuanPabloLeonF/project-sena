package com.karmelshoes.domain.service;

import com.karmelshoes.domain.dto.ProductDto;
import com.karmelshoes.persistency.entity.ProductEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService {
    List<ProductDto> getAll();
    ProductDto getById(Long id);
    ProductDto create(ProductEntity product);
    ProductDto updateAllFields(Long id, ProductEntity product);
    void deleteById(Long id);
    ProductDto updateFieldImg(Long id, String img);
    ProductDto updateFieldSizes(Long id, List<Integer> sizes);
}
