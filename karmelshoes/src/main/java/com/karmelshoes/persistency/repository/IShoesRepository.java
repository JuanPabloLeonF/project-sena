package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.ShoesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IShoesRepository extends JpaRepository<ShoesEntity, Long> {
}
