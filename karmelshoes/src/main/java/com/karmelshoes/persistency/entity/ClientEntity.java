package com.karmelshoes.persistency.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "client")
public class ClientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 70)
    private String name;

    @Column(name = "email", length = 80, unique = true)
    private String email;

    @Column(name = "phone", length = 16)
    private String phone;

    @Column(name = "address", length = 200)
    private String address;

    @OneToMany(mappedBy = "clientEntity", cascade = CascadeType.PERSIST, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<ShoppingCartEntity> shoppingCartEntities = new ArrayList<>();

    public List<ShoppingCartEntity> getShoppingCartEntities() {
        return shoppingCartEntities;
    }

    public void setShoppingCartEntities(List<ShoppingCartEntity> shoppingCartEntities) {
        this.shoppingCartEntities = shoppingCartEntities;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
