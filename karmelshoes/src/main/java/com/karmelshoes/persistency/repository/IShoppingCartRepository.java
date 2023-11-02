package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IShoppingCartRepository extends JpaRepository<ShoppingCartEntity, Long> {

    @Query("SELECT CASE WHEN COUNT(s) > 0 THEN true ELSE false END FROM SalesEntity s WHERE s.shoppingCart.id = :shoppingCartId")
    Boolean isShoppingCartUsedInSale(@Param("shoppingCartId") Long shoppingCartId);
}