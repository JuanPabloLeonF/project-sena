package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IShoppingCartRepository extends JpaRepository<ShoppingCartEntity, Long> {
}