package com.karmelshoes.persistency.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private Double price;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "product_type")
    private String productType;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "shopping_cart_id")
    private ShoppingCartEntity shoppingCartEntity;

    @OneToOne(cascade = CascadeType.PERSIST, orphanRemoval = true, fetch = FetchType.EAGER)
    @JoinColumn(name = "shoes_entity_id")
    private ShoesEntity shoesEntity;

    public ShoesEntity getShoesEntity() {
        return shoesEntity;
    }

    public void setShoesEntity(ShoesEntity shoesEntity) {
        this.shoesEntity = shoesEntity;
    }

    public ProductEntity() {
    }

    public ShoppingCartEntity getShoppingCart() {
        return shoppingCartEntity;
    }

    public void setShoppingCart(ShoppingCartEntity shoppingCartEntity) {
        this.shoppingCartEntity = shoppingCartEntity;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}