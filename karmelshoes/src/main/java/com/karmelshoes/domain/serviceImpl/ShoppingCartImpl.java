package com.karmelshoes.domain.serviceImpl;

import com.karmelshoes.domain.dto.ShoppingCartDto;
import com.karmelshoes.domain.service.IShoppingCartService;
import com.karmelshoes.persistency.entity.ClientEntity;
import com.karmelshoes.persistency.entity.ProductEntity;
import com.karmelshoes.persistency.entity.ShoppingCartEntity;
import com.karmelshoes.persistency.mappers.IShoppingCartMapper;
import com.karmelshoes.persistency.repository.IClientRepository;
import com.karmelshoes.persistency.repository.IShoppingCartRepository;
import com.karmelshoes.persistency.repository.IProductEntityRepository;
import com.karmelshoes.persistency.validation.ValidationLogic;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ShoppingCartImpl implements IShoppingCartService {

    private final IShoppingCartRepository iShoppingCartRepository;
    private final IProductEntityRepository iProductEntityRepository;
    private final IClientRepository iClientRepository;
    private final IShoppingCartMapper iShoppingCartMapper;

    public ShoppingCartImpl(IShoppingCartRepository iShoppingCartRepository, IProductEntityRepository iProductEntityRepository, IClientRepository iClientRepository,
                            IShoppingCartMapper iShoppingCartMapper) {
        this.iShoppingCartRepository = iShoppingCartRepository;
        this.iProductEntityRepository = iProductEntityRepository;
        this.iClientRepository = iClientRepository;
        this.iShoppingCartMapper = iShoppingCartMapper;
    }

    @Override
    public List<ShoppingCartDto> getAll() {
        return iShoppingCartRepository.findAll().stream()
                .map(iShoppingCartMapper::shoppingCartEntityToShoppingCartDto)
                .collect(Collectors.toList());
    }

    @Override
    public ShoppingCartDto getByIdShoppingCart(Long id) {
        Optional<ShoppingCartEntity> shoppingCartOptional = iShoppingCartRepository.findById(id);
        if (shoppingCartOptional.isPresent()) {
            return iShoppingCartMapper.shoppingCartEntityToShoppingCartDto(shoppingCartOptional.get());
        }
        return null;
    }

    @Override
    public ShoppingCartDto create(Long id) {
        Optional<ClientEntity> clientOptional = iClientRepository.findById(id);
        ShoppingCartEntity shoppingCartEntity = new ShoppingCartEntity();

        if (clientOptional.isPresent()) {
            if (ValidationLogic.validateIsClientDelete(clientOptional.get())){
                shoppingCartEntity.setTotalPrice(00.0);
                return iShoppingCartMapper.shoppingCartEntityToShoppingCartDto(iShoppingCartRepository.save(shoppingCartEntity));
            }
            return null;
        }

        return null;
    }

    @Override
    public void addProductToCart(Long shoppingCartId, Long productId) {
        Optional<ShoppingCartEntity> shoppingCartOptional = iShoppingCartRepository.findById(shoppingCartId);
        Optional<ProductEntity> productOptional = iProductEntityRepository.findById(productId);

        if (shoppingCartOptional.isPresent() && productOptional.isPresent()) {
            ShoppingCartEntity shoppingCart = shoppingCartOptional.get();
            ProductEntity product = productOptional.get();

            List<ProductEntity> products = shoppingCart.getProductEntities();
            products.add(product);

            Map<ProductEntity, Integer> cartItems = calculateTotalQuantityProductToShoppingCart(shoppingCart.getCartItems(), product, 1);

            Double totalPrice = calculateTotalPriceToShoppingCart(cartItems);

            shoppingCart.setCartItems(cartItems);
            shoppingCart.setTotalPrice(totalPrice);
            shoppingCart.setProductEntities(products);
            iShoppingCartRepository.save(shoppingCart);
        }
    }

    @Override
    public void removeProductFromCart(Long shoppingCartId, Long productId) {
        Optional<ShoppingCartEntity> shoppingCartOptional = iShoppingCartRepository.findById(shoppingCartId);
        Optional<ProductEntity> productOptional = iProductEntityRepository.findById(productId);

        if (shoppingCartOptional.isPresent() && productOptional.isPresent()) {
            ShoppingCartEntity shoppingCart = shoppingCartOptional.get();
            ProductEntity product = productOptional.get();

            List<ProductEntity> products = shoppingCart.getProductEntities();
            Map<ProductEntity, Integer> cartItems = shoppingCart.getCartItems();

            if (products.remove(product)) {
                cartItems = calculateTotalQuantityProductToShoppingCart(cartItems, product, -1);
                Double totalPrice = calculateTotalPriceToShoppingCart(cartItems);

                shoppingCart.setCartItems(cartItems);
                shoppingCart.setTotalPrice(totalPrice);
                shoppingCart.setProductEntities(products);
                iShoppingCartRepository.save(shoppingCart);
            }
        }
    }

    @Override
    public void deleteByIdShoppingCart(Long id) {
        Optional<ShoppingCartEntity> shoppingCartEntity = iShoppingCartRepository.findById(id);
        if (shoppingCartEntity.isPresent()) {
            iShoppingCartRepository.deleteById(shoppingCartEntity.get().getId());
        }
    }

    private static Map<ProductEntity, Integer> calculateTotalQuantityProductToShoppingCart(Map<ProductEntity, Integer> cartItems, ProductEntity product, Integer change) {
        Integer quantity = cartItems.getOrDefault(product, 0);
        quantity += change;
        if (quantity <= 0) {
            cartItems.remove(product);
        } else {
            cartItems.put(product, quantity);
        }
        return cartItems;
    }

    private static Double calculateTotalPriceToShoppingCart(Map<ProductEntity, Integer> cartItems) {
        Double totalPrice = 0.0;
        for (Map.Entry<ProductEntity, Integer> entry : cartItems.entrySet()) {
            ProductEntity product = entry.getKey();
            Integer quantity = entry.getValue();
            totalPrice += product.getPrice() * quantity;
        }
        return totalPrice;
    }
}
