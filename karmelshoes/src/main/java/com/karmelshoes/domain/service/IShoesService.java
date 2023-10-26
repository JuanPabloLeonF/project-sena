package com.karmelshoes.domain.service;

import com.karmelshoes.persistency.entity.ShoesEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IShoesService {

    List<ShoesEntity> getAll();
}
