package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.SalesDto;
import com.karmelshoes.domain.service.ISalesService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.SalesEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import com.karmelshoes.persistency.mappers.ISalesMapper;
import com.karmelshoes.persistency.repository.IClientRepository;
import com.karmelshoes.persistency.repository.ISalesEntityRepository;
import com.karmelshoes.persistency.repository.IShoppingCartRepository;
import com.karmelshoes.persistency.validation.ValidationLogic;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SalesServiceImpl implements ISalesService {

    private final ISalesEntityRepository iSalesEntityRepository;
    private final IClientRepository iClientRepository;
    private final IShoppingCartRepository iShoppingCartRepository;
    private final ISalesMapper iSalesMapper;

    public SalesServiceImpl(ISalesEntityRepository iSalesEntityRepository, IClientRepository iClientRepository, IShoppingCartRepository iShoppingCartRepository,
                            ISalesMapper iSalesMapper) {
        this.iSalesEntityRepository = iSalesEntityRepository;
        this.iClientRepository = iClientRepository;
        this.iShoppingCartRepository = iShoppingCartRepository;
        this.iSalesMapper = iSalesMapper;
    }

    @Override
    public SalesDto create(SalesEntity sales, Long idShoppingCart) {
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findById(sales.getClient().getId());
        Optional<ShoppingCartEntity> shoppingCartEntityOptional = iShoppingCartRepository.findById(idShoppingCart);
        if (clientEntityOptional.isPresent() && shoppingCartEntityOptional.isPresent()) {
            if (ValidationLogic.validateIsClientDelete(clientEntityOptional.get())) {
                if (!ValidationLogic.validateIsUsedInSale(iShoppingCartRepository, idShoppingCart)) {
                    ShoppingCartEntity shoppingCart = shoppingCartEntityOptional.get();
                    ClientEntity client = clientEntityOptional.get();
                    sales.setShoppingCart(shoppingCart);
                    sales.setClient(client);
                    sales.setSaleAmount(shoppingCart.getTotalPrice());
                    return iSalesMapper.salesEntityToSalesDto(iSalesEntityRepository.save(sales));
                }
                return null;
            }
            return null;
        }
        return null;
    }

    @Override
    public List<SalesDto> getAll() {
        return iSalesEntityRepository.findAll().stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .collect(Collectors.toList());
    }

    @Override
    public SalesDto getById(Long id) {
        Optional<SalesEntity> salesEntityOptional = iSalesEntityRepository.findById(id);
        if (salesEntityOptional.isPresent()) {
            return iSalesMapper.salesEntityToSalesDto(salesEntityOptional.get());
        }
        return null;
    }

    @Override
    public List<SalesDto> getByIdClient(Long id) {
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findById(id);
        if (clientEntityOptional.isPresent()) {
            return iSalesEntityRepository.findByClient_Id(clientEntityOptional.get().getId())
                    .stream().map(iSalesMapper::salesEntityToSalesDto)
                    .collect(Collectors.toList());
        }
        return null;
    }

    @Override
    public List<SalesDto> getByDate(String dateString) {
        LocalDate date = LocalDate.parse(dateString);
        return iSalesEntityRepository.findByDate(date).stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<SalesDto> getByPaymentMethod(String paymentMethod) {
        return iSalesEntityRepository.findByPaymentMethod(paymentMethod).stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .collect(Collectors.toList());
    }

    @Override
    public SalesDto getByIdShoppingCart(Long id) {
        Optional<SalesEntity> shoppingCartEntityOptional = iSalesEntityRepository.findByShoppingCart_Id(id);
        if (shoppingCartEntityOptional.isPresent()) {
            return shoppingCartEntityOptional.map(iSalesMapper::salesEntityToSalesDto).get();
        }
        return null;
    }
}
