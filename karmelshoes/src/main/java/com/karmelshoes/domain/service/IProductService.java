package com.karmelshoes.domain.service;

import com.karmelshoes.persistency.entity.ProductEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IProductService {
    List<ProductEntity> getAll();
    ProductEntity create(ProductEntity product);
    ProductEntity updateAllFields(Long id, ProductEntity product);
    void deleteById(Long id);
}
