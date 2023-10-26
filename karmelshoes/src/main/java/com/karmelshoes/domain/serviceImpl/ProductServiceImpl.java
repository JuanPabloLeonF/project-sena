package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.IProductService;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.repository.IProductEntityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {

    private final IProductEntityRepository iProductEntityRepository;

    public ProductServiceImpl(IProductEntityRepository iProductEntityRepository) {
        this.iProductEntityRepository = iProductEntityRepository;
    }

    @Override
    public List<ProductEntity> getAll() {
        return iProductEntityRepository.findAll();
    }

    @Override
    public ProductEntity create(ProductEntity product) {
        return iProductEntityRepository.save(product);
    }
}
