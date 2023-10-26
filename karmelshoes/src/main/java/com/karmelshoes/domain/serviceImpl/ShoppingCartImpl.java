package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.IShoppingCartService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import com.karmelshoes.persistency.repository.IClientRepository;
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
    private final IClientRepository iClientRepository;

    public ShoppingCartImpl(IShoppingCartRepository iShoppingCartRepository, IProductEntityRepository iProductEntityRepository, IClientRepository iClientRepository) {
        this.iShoppingCartRepository = iShoppingCartRepository;
        this.iProductEntityRepository = iProductEntityRepository;
        this.iClientRepository = iClientRepository;
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
            ShoppingCartEntity shoppingCart = shoppingCartOptional.get();
            ProductEntity product = productOptional.get();
            List<ProductEntity> products = shoppingCart.getProductEntities();
            products.add(product);
            iShoppingCartRepository.save(shoppingCart);
        }
    }

    @Override
    public ShoppingCartEntity create(Long id) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        ShoppingCartEntity shoppingCartEntity = new ShoppingCartEntity();

        if (clientOptional.isPresent()) {
            ClientEntity client = clientOptional.orElseThrow();
            shoppingCartEntity.setClientEntity(client);
            return iShoppingCartRepository.save(shoppingCartEntity);
        }

        return null;
    }
}
