package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductEntityRepository extends JpaRepository<ProductEntity, Long> {
}