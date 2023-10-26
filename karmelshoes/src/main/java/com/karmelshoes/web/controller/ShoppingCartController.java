package com.karmelshoes.web.controller;

import com.karmelshoes.domain.service.IShoppingCartService;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shoppingCart")
public class ShoppingCartController {

    private final IShoppingCartService iShoppingCartService;

    public ShoppingCartController(IShoppingCartService iShoppingCartService) {
        this.iShoppingCartService = iShoppingCartService;
    }

    @GetMapping("/getAll")
    public List<ShoppingCartEntity> getAll() {
        return iShoppingCartService.getAll();
    }

    @PostMapping("/create")
    public ShoppingCartEntity create(ShoppingCartEntity shoppingCartEntity) {
        return iShoppingCartService.create(shoppingCartEntity);
    }

    @PostMapping("/addProduct/{shoppingCartId}/{productId}")
    public void addProductToShoppingCart(@PathVariable("shoppingCartId") Long shoppingCartId, @PathVariable Long productId) {
        iShoppingCartService.addProductToCart(shoppingCartId, productId);
    }
}
