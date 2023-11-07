package com.karmelshoes.persistency.repository;

import com.karmelshoes.persistency.entity.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IClientRepository extends JpaRepository<ClientEntity, Long> {
    Optional<ClientEntity> findByName(String name);
}