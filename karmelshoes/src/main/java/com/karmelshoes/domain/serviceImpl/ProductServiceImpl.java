package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.ProductDto;
import com.karmelshoes.domain.service.IProductService;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.mappers.IProductMapper;
import com.karmelshoes.persistency.repository.IProductEntityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IProductService {

    private final IProductEntityRepository iProductEntityRepository;
    private final IProductMapper iProductMapper;

    public ProductServiceImpl(IProductEntityRepository iProductEntityRepository,
                              IProductMapper iProductMapper) {
        this.iProductEntityRepository = iProductEntityRepository;
        this.iProductMapper = iProductMapper;
    }

    @Override
    public List<ProductDto> getAll() {
        return iProductEntityRepository.findAll()
                .stream().map(iProductMapper::productEntityToProductDto)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDto getById(Long id) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            return iProductMapper.productEntityToProductDto(productEntityOptional.get());
        }
        return null;
    }

    @Override
    public ProductDto create(ProductEntity product) {
        return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(product));
    }

    @Override
    public ProductDto updateAllFields(Long id, ProductEntity product) {
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
            productEntity.setSizes(product.getSizes());
            productEntity.setStock(product.getStock());
            productEntity.setImg(product.getImg());
            productEntity.setGender(product.getGender());
            return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(productEntity));
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

    @Override
    public ProductDto updateFieldImg(Long id, String img) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
             productEntityOptional.get().setImg(img);
             return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(productEntityOptional.get()));
        }
        return null;
    }

    @Override
    public ProductDto updateFieldSizes(Long id, List<Integer> sizes) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            productEntityOptional.get().setSizes(sizes);
            return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(productEntityOptional.get()));
        }
        return null;
    }
}
