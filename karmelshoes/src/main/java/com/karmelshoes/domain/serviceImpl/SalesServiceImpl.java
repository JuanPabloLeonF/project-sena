package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.service.ISalesService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.SalesEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import com.karmelshoes.persistency.repository.IClientRepository;
import com.karmelshoes.persistency.repository.ISalesEntityRepository;
import com.karmelshoes.persistency.repository.IShoppingCartRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class SalesServiceImpl implements ISalesService {

    private final ISalesEntityRepository iSalesEntityRepository;
    private final IClientRepository iClientRepository;
    private final IShoppingCartRepository iShoppingCartRepository;

    public SalesServiceImpl(ISalesEntityRepository iSalesEntityRepository, IClientRepository iClientRepository, IShoppingCartRepository iShoppingCartRepository) {
        this.iSalesEntityRepository = iSalesEntityRepository;
        this.iClientRepository = iClientRepository;
        this.iShoppingCartRepository = iShoppingCartRepository;
    }

    @Override
    public SalesEntity create(SalesEntity sales, Long idShoppingCart) {
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findById(sales.getClientEntity().getId());
        Optional<ShoppingCartEntity> shoppingCartEntityOptional = iShoppingCartRepository.findById(idShoppingCart);

        if (clientEntityOptional.isPresent() && shoppingCartEntityOptional.isPresent()) {
            ShoppingCartEntity shoppingCart = shoppingCartEntityOptional.get();
            ClientEntity client = clientEntityOptional.get();

            sales.setClientEntity(client);
            sales.setShoppingCartId(shoppingCart.getId());
            sales.setSaleAmount(shoppingCart.getTotalPrice());
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
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findById(id);
        if (clientEntityOptional.isPresent()) {
            return iSalesEntityRepository.findByClientEntity_Id(clientEntityOptional.get().getId());
        }
        return null;
    }

    @Override
    public List<SalesEntity> getByDate(String dateString) {
        LocalDate date = LocalDate.parse(dateString);
        return iSalesEntityRepository.findByDate(date);
    }

    @Override
    public List<SalesEntity> getByPaymentMethod(String paymentMethod) {
        return iSalesEntityRepository.findByPaymentMethod(paymentMethod);
    }
}
