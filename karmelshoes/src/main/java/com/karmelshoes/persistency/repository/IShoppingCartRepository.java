package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IShoppingCartRepository extends JpaRepository<ShoppingCartEntity, Long> {
    List<ShoppingCartEntity> findByClientEntity_Id(Long id);
}