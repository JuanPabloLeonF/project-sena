package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.ISalesService;
import com.karmelshoes.persistency.entity.SalesEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import com.karmelshoes.persistency.repository.ISalesEntityRepository;
import com.karmelshoes.persistency.repository.IShoppingCartRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class SalesServiceImpl implements ISalesService {

    private final ISalesEntityRepository iSalesEntityRepository;
    private final IShoppingCartRepository iShoppingCartRepository;

    public SalesServiceImpl(ISalesEntityRepository iSalesEntityRepository, IShoppingCartRepository iShoppingCartRepository) {
        this.iSalesEntityRepository = iSalesEntityRepository;
        this.iShoppingCartRepository = iShoppingCartRepository;
    }

    @Override
    public SalesEntity create(SalesEntity sales) {
        Optional<ShoppingCartEntity> shoppingCartEntityOptional = iShoppingCartRepository.findById(sales.getShoppingCart().getId());
        if (shoppingCartEntityOptional.isPresent()) {
            sales.setShoppingCart(shoppingCartEntityOptional.get());
            sales.setSaleAmount(shoppingCartEntityOptional.get().getTotalPrice());
            return iSalesEntityRepository.save(sales);
        }
        return null;
    }

    @Override
    public List<SalesEntity> getAll() {
        return iSalesEntityRepository.findAll();
    }

    @Override
    public SalesEntity getById(Long id) {
        Optional<SalesEntity> salesEntityOptional = iSalesEntityRepository.findById(id);
        if (salesEntityOptional.isPresent()) {
            return salesEntityOptional.get();
        }
        return null;
    }

    @Override
    public List<SalesEntity> getByIdClient(Long id) {
        return iSalesEntityRepository.findByShoppingCart_ClientEntity_Id(id);
    }

    @Override
    public List<SalesEntity> getByDate(String dateString) {
        LocalDate date = LocalDate.parse(dateString);
        return iSalesEntityRepository.findByDate(date);
    }

    @Override
    public SalesEntity getByIdShoppingCart(Long id) {
        Optional<SalesEntity> salesEntityOptional = iSalesEntityRepository.findByShoppingCart_Id(id);
        if (salesEntityOptional.isPresent()) {
            return salesEntityOptional.get();
        }
        return null;
    }

    @Override
    public List<SalesEntity> getByPaymentMethod(String paymentMethod) {
        return iSalesEntityRepository.findByPaymentMethod(paymentMethod);
    }
}
