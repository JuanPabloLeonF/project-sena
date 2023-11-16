package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.SalesDto;
import com.karmelshoes.domain.service.ISalesService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.SalesEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import com.karmelshoes.persistency.errors.exception.ClientIsEliminatedException;
import com.karmelshoes.persistency.errors.exception.ObjectNotFoundException;
import com.karmelshoes.persistency.errors.exception.ShoppingCartAssociatedWithSaleException;
import com.karmelshoes.persistency.mappers.ISalesMapper;
import com.karmelshoes.persistency.repository.IClientRepository;
import com.karmelshoes.persistency.repository.ISalesEntityRepository;
import com.karmelshoes.persistency.repository.IShoppingCartRepository;
import com.karmelshoes.persistency.validation.ValidationLogic;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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

    @Transactional(readOnly = false)
    @Override
    public SalesDto create(SalesEntity sales, Long idShoppingCart) {
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findById(sales.getClient().getId());
        Optional<ShoppingCartEntity> shoppingCartEntityOptional = iShoppingCartRepository.findById(idShoppingCart);

        if (clientEntityOptional.isPresent() && shoppingCartEntityOptional.isPresent()) {
            if (Boolean.TRUE.equals(ValidationLogic.validateIsClientDelete(clientEntityOptional.get()))) {
                if (Boolean.FALSE.equals(ValidationLogic.validateIsUsedInSale(iShoppingCartRepository, idShoppingCart))) {
                    ShoppingCartEntity shoppingCart = shoppingCartEntityOptional.get();
                    ClientEntity client = clientEntityOptional.get();
                    sales.setShoppingCart(shoppingCart);
                    sales.setClient(client);
                    sales.setSaleAmount(shoppingCart.getTotalPrice());
                    return iSalesMapper.salesEntityToSalesDto(iSalesEntityRepository.save(sales));
                } else {
                    throw new ShoppingCartAssociatedWithSaleException("El carro de compras con el ID:" + idShoppingCart + " ya esta asociado a una venta");
                }
            } else {
                throw new ClientIsEliminatedException("El cliente con el ID:" + clientEntityOptional.get().getId() + " no puede crear un carro de compras");
            }
        } else {
            throw new ObjectNotFoundException("El cliente con el ID:" + sales.getClient().getId() + " o el carro de compras con el ID: " + idShoppingCart + " no existen");
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<SalesDto> getAll() {
        return iSalesEntityRepository.findAll().stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .toList();
    }

    @Transactional(readOnly = true)
    @Override
    public SalesDto getById(Long id) {
        Optional<SalesEntity> salesEntityOptional = iSalesEntityRepository.findById(id);
        if (salesEntityOptional.isPresent()) {
            return iSalesMapper.salesEntityToSalesDto(salesEntityOptional.get());
        } else {
            throw new ObjectNotFoundException("La venta con el ID: " + id + " no existe");
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<SalesDto> getByIdClient(Long id) {
        Optional<ClientEntity> clientEntityOptional = iClientRepository.findById(id);
        if (clientEntityOptional.isPresent()) {
            return iSalesEntityRepository.findByClient_Id(clientEntityOptional.get().getId())
                    .stream().map(iSalesMapper::salesEntityToSalesDto)
                    .toList();
        } else {
            throw new ObjectNotFoundException("El cliente con el ID: " + id + " no existe");
        }
    }

    @Transactional(readOnly = true)
    @Override
    public List<SalesDto> getByDate(String dateString) {
        LocalDate date = LocalDate.parse(dateString);
        return iSalesEntityRepository.findByDate(date).stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .toList();
    }

    @Transactional(readOnly = true)
    @Override
    public List<SalesDto> getByPaymentMethod(String paymentMethod) {
        return iSalesEntityRepository.findByPaymentMethod(paymentMethod).stream()
                .map(iSalesMapper::salesEntityToSalesDto)
                .toList();
    }

    @Transactional(readOnly = true)
    @Override
    public SalesDto getByIdShoppingCart(Long id) {
        Optional<SalesEntity> shoppingCartEntityOptional = iSalesEntityRepository.findByShoppingCart_Id(id);
        if (shoppingCartEntityOptional.isPresent()) {
            return shoppingCartEntityOptional.map(iSalesMapper::salesEntityToSalesDto).get();
        } else {
            throw new ObjectNotFoundException("El carro de compras con el ID: " + id + " no existe");
        }
    }
}
