package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.IProductService;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.repository.IProductEntityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public ProductEntity updateAllFields(Long id, ProductEntity product) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            ProductEntity productEntity = productEntityOptional.get();
            productEntity.setName(product.getName());
            productEntity.setProductType(product.getProductType());
            productEntity.setPrice(product.getPrice());
            productEntity.setDescription(product.getDescription());
            productEntity.setColor(product.getColor());
            productEntity.setMark(product.getMark());
            productEntity.setModel(product.getModel());
            productEntity.setSize(product.getSize());
            productEntity.setStock(product.getStock());
            return iProductEntityRepository.save(productEntity);
        }
        return null;
    }

    @Override
    public void deleteById(Long id) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            iProductEntityRepository.deleteById(productEntityOptional.get().getId());
        }
    }
}
