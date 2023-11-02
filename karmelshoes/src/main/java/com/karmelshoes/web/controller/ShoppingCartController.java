package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.ShoppingCartDto;
import com.karmelshoes.domain.service.IShoppingCartService;
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
    public List<ShoppingCartDto> getAll() {
        return iShoppingCartService.getAll();
    }

    @GetMapping("/getById/{id}")
    public ShoppingCartDto getByIdShoppingCart(@PathVariable("id") Long id) {
        return iShoppingCartService.getByIdShoppingCart(id);
    }

    @PostMapping("/create/{id}")
    public ShoppingCartDto create(@PathVariable("id") Long id) {
        return iShoppingCartService.create(id);
    }

    @PutMapping("/addProduct/{shoppingCartId}/{productId}")
    public void addProductToShoppingCart(@PathVariable("shoppingCartId") Long shoppingCartId, @PathVariable("productId") Long productId) {
        iShoppingCartService.addProductToCart(shoppingCartId, productId);
    }

    @PutMapping("/removeProduct/{shoppingCartId}/{productId}")
    public void removeProductFromCart(@PathVariable("shoppingCartId") Long shoppingCartId, @PathVariable("productId") Long productId) {
        iShoppingCartService.removeProductFromCart(shoppingCartId, productId);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteByIdShoppingCart(@PathVariable("id") Long id) {
        iShoppingCartService.deleteByIdShoppingCart(id);
    }
}
