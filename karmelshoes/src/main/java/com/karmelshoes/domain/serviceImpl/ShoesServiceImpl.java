package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.IShoesService;
import com.karmelshoes.persistency.entity.ShoesEntity;
import com.karmelshoes.persistency.repository.IShoesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoesServiceImpl implements IShoesService {

    private final IShoesRepository iShoesRepository;

    public ShoesServiceImpl(IShoesRepository iShoesRepository) {
        this.iShoesRepository = iShoesRepository;
    }

    @Override
    public List<ShoesEntity> getAll() {
        return iShoesRepository.findAll();
    }
}
