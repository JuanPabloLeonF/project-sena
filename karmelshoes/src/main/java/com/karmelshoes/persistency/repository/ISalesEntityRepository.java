package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.SalesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ISalesEntityRepository extends JpaRepository<SalesEntity, Long> {

    List<SalesEntity> findByDate(LocalDate date);
    List<SalesEntity> findByPaymentMethod(String paymentMethod);
    List<SalesEntity> findByClientEntity_Id(Long id);
}