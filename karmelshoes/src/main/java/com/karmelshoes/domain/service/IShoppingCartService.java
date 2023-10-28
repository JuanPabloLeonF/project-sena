package com.karmelshoes.domain.service;

import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IShoppingCartService {
    List<ShoppingCartEntity> getAll();
    List<ShoppingCartEntity> getByIdClientOneShoppingCart(Long id);
    void addProductToCart(Long shoppingCartId, Long productId);
    ShoppingCartEntity create(Long id);
    void removeProductFromCart(Long shoppingCartId, Long productId);
}
