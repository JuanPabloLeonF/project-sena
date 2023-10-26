package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.IShoppingCartService;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import com.karmelshoes.persistency.repository.IShoppingCartRepository;
import com.karmelshoes.persistency.repository.IProductEntityRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartImpl implements IShoppingCartService {

    private final IShoppingCartRepository iShoppingCartRepository;
    private final IProductEntityRepository iProductEntityRepository;

    public ShoppingCartImpl(IShoppingCartRepository iShoppingCartRepository, IProductEntityRepository iProductEntityRepository) {
        this.iShoppingCartRepository = iShoppingCartRepository;
        this.iProductEntityRepository = iProductEntityRepository;
    }

    @Override
    public List<ShoppingCartEntity> getAll() {
        return iShoppingCartRepository.findAll();
    }

    @Override
    public void addProductToCart(Long shoppingCartId, Long productId) {
        Optional<ShoppingCartEntity> shoppingCartOptional = iShoppingCartRepository.findById(shoppingCartId);
        Optional<ProductEntity> productOptional = iProductEntityRepository.findById(productId);

        if (shoppingCartOptional.isPresent() && productOptional.isPresent()) {
            ShoppingCartEntity shoppingCart = shoppingCartOptional.orElseThrow();
            ProductEntity product = productOptional.orElseThrow();

            List<ProductEntity> products = shoppingCart.getProductEntities();
            if (products == null) {
                products = new ArrayList<>();
                shoppingCart.setProductEntities(products);
            }

            products.add(product);
            iShoppingCartRepository.save(shoppingCart);
        }
    }

    @Override
    public ShoppingCartEntity create(ShoppingCartEntity shoppingCartEntity) {
        return iShoppingCartRepository.save(shoppingCartEntity);
    }
}
