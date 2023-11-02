package com.karmelshoes.domain.service;

import com.karmelshoes.domain.dto.SalesDto;
import com.karmelshoes.persistency.entity.SalesEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ISalesService {
    SalesDto create(SalesEntity sales, Long idShoppingCart, Long idClient);
    List<SalesDto> getAll();
    SalesDto getById(Long id);
    List<SalesDto> getByIdClient(Long id);
    List<SalesDto> getByDate(String dateString);
    List<SalesDto> getByPaymentMethod(String paymentMethod);
}
