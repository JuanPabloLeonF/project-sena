package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.SalesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ISalesEntityRepository extends JpaRepository<SalesEntity, Long> {
    List<SalesEntity> findByShoppingCart_ClientEntity_Id(Long id);
    List<SalesEntity> findByDate(LocalDate date);
    Optional<SalesEntity> findByShoppingCart_Id(Long id);
    List<SalesEntity> findByPaymentMethod(String paymentMethod);
}