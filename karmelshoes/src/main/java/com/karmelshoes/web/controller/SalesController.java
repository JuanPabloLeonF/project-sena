package com.karmelshoes.web.controller;

import com.karmelshoes.domain.service.ISalesService;
import com.karmelshoes.persistency.entity.SalesEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
public class SalesController {

    private final ISalesService iSalesService;

    public SalesController(ISalesService iSalesService) {
        this.iSalesService = iSalesService;
    }

    @GetMapping("/getAll")
    public List<SalesEntity> getAll() {
        return iSalesService.getAll();
    }

    @GetMapping("/getById/{id}")
    SalesEntity getById(@PathVariable("id") Long id) {
        return iSalesService.getById(id);
    }

    @GetMapping("/getByIdClient/{id}")
    List<SalesEntity> getByIdClient(@PathVariable("id") Long id) {
        return iSalesService.getByIdClient(id);
    }

    @GetMapping("/getByDate/{dateString}")
    List<SalesEntity> getByDate(@PathVariable("dateString") String dateString) {
        return iSalesService.getByDate(dateString);
    }

    @GetMapping("/getByIdShoppingCart/{id}")
    SalesEntity getByIdShoppingCart(@PathVariable("id") Long id) {
        return iSalesService.getByIdShoppingCart(id);
    }

    @GetMapping("/getByPaymentMethod/{paymentMethod}")
    List<SalesEntity> getByPaymentMethod(@PathVariable("paymentMethod") String paymentMethod) {
        return iSalesService.getByPaymentMethod(paymentMethod);
    }

    @PostMapping("/create")
    SalesEntity create(@RequestBody SalesEntity sales) {
        return iSalesService.create(sales);
    }
}
