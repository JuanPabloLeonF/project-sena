package com.karmelshoes.persistency.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "shopping_cart")
public class ShoppingCartEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @ElementCollection
    @CollectionTable(name = "cart_items", joinColumns = @JoinColumn(name = "cart_id"))
    @MapKeyJoinColumn(name = "product_id")
    @Column(name = "quantity")
    private Map<ProductEntity, Integer> cartItems = new HashMap<>();

    @Column(name = "total_price")
    private Double totalPrice;

    @ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "client_entity_id")
    private ClientEntity clientEntity;

    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinTable(name = "shopping_cart_productEntities",
            joinColumns = @JoinColumn(name = "shoppingCartEntity_id"),
            inverseJoinColumns = @JoinColumn(name = "productEntities_id"))
    private List<ProductEntity> productEntities = new ArrayList<>();

    public List<ProductEntity> getProductEntities() {
        return productEntities;
    }

    public void setProductEntities(List<ProductEntity> productEntities) {
        this.productEntities = productEntities;
    }

    public ClientEntity getClientEntity() {
        return clientEntity;
    }

    public void setClientEntity(ClientEntity clientEntity) {
        this.clientEntity = clientEntity;
    }

    public Map<ProductEntity, Integer> getCartItems() {
        return cartItems;
    }

    public void setCartItems(Map<ProductEntity, Integer> cartItems) {
        this.cartItems = cartItems;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
