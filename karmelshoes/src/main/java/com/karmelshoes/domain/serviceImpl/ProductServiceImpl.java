package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.ProductDto;
import com.karmelshoes.domain.service.IProductService;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.errors.exception.DataIntegrityViolationExceptionPersonality;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import com.karmelshoes.persistency.mappers.IProductMapper;
import com.karmelshoes.persistency.repository.IProductEntityRepository;
import jakarta.validation.ConstraintViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IProductService {

    private final IProductEntityRepository iProductEntityRepository;
    private final IProductMapper iProductMapper;

    public ProductServiceImpl(IProductEntityRepository iProductEntityRepository, IProductMapper iProductMapper) {
        this.iProductEntityRepository = iProductEntityRepository;
        this.iProductMapper = iProductMapper;
    }

    @Transactional(readOnly = true)
    @Override
    public List<ProductDto> getAll() {
        return iProductEntityRepository.findAll()
                .stream().map(iProductMapper::productEntityToProductDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    @Override
    public ProductDto getById(Long id) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            return iProductMapper.productEntityToProductDto(productEntityOptional.get());
        }
        throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
    }

    @Transactional(readOnly = false)
    @Override
    public ProductDto create(ProductEntity product) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findByCode(product.getCode());
        if (productEntityOptional.isPresent()) {
            ProductEntity productEntity = productEntityOptional.get();
            if (Objects.equals(productEntity.getId(), product.getId())) {
                productEntity.setStatus(true);
                return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(productEntity));
            } else {
                throw new DataIntegrityViolationExceptionPersonality("El campo code: " + product.getCode() + " ya existe");
            }
        }
        product.setStatus(true);
        return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(product));
    }

    @Transactional(readOnly = false)
    @Override
    public ProductDto updateAllFields(Long id, ProductEntity product) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {

            ProductEntity productEntity = productEntityOptional.get();
            Optional<ProductEntity> productEntityCode = iProductEntityRepository.findByCode(product.getCode());
            if (productEntityCode.isPresent() && !Objects.equals(productEntity.getId(), productEntityCode.get().getId())) {
                throw new DataIntegrityViolationExceptionPersonality("El campo code: " + product.getCode() + " ya existe");
            } else {
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
                productEntity.setCode(product.getCode());
                return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(productEntity));
            }
        }
        throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
    }

    @Transactional(readOnly = false)
    @Override
    public void deleteById(Long id) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            productEntityOptional.get().setStatus(false);
            iProductEntityRepository.save(productEntityOptional.get());
        } else {
            throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
        }
    }


    @Transactional(readOnly = false)
    @Override
    public ProductDto updateFieldImg(Long id, String img) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
             productEntityOptional.get().setImg(img);
             return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(productEntityOptional.get()));
        }
        throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
    }

    @Transactional(readOnly = false)
    @Override
    public ProductDto updateFieldSizes(Long id, List<Integer> sizes) {
        Optional<ProductEntity> productEntityOptional = iProductEntityRepository.findById(id);
        if (productEntityOptional.isPresent()) {
            productEntityOptional.get().setSizes(sizes);
            return iProductMapper.productEntityToProductDto(iProductEntityRepository.save(productEntityOptional.get()));
        }
        throw new ObjectNotFoundException("Producto no encontrado con el ID:" + id);
    }
}
