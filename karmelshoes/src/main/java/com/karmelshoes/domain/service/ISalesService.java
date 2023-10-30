package com.karmelshoes.domain.service;

import com.karmelshoes.persistency.entity.SalesEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ISalesService {
    SalesEntity create(SalesEntity sales);
    List<SalesEntity> getAll();
    SalesEntity getById(Long id);
    List<SalesEntity> getByIdClient(Long id);
    List<SalesEntity> getByDate(String dateString);
    SalesEntity getByIdShoppingCart(Long id);
    List<SalesEntity> getByPaymentMethod(String paymentMethod);
}
