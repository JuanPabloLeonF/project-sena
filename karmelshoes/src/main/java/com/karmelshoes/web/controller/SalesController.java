package com.karmelshoes.web.controller;

import com.karmelshoes.domain.dto.SalesDto;
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
    public List<SalesDto> getAll() {
        return iSalesService.getAll();
    }

    @GetMapping("/getById/{id}")
    public SalesDto getById(@PathVariable("id") Long id) {
        return iSalesService.getById(id);
    }

    @GetMapping("/getByIdClient/{id}")
    public List<SalesDto> getByIdClient(@PathVariable("id") Long id) {
        return iSalesService.getByIdClient(id);
    }

    @GetMapping("/getByDate/{dateString}")
    public List<SalesDto> getByDate(@PathVariable("dateString") String dateString) {
        return iSalesService.getByDate(dateString);
    }

    @GetMapping("/getByPaymentMethod/{paymentMethod}")
    public List<SalesDto> getByPaymentMethod(@PathVariable("paymentMethod") String paymentMethod) {
        return iSalesService.getByPaymentMethod(paymentMethod);
    }

    @PostMapping("/create/{idShoppingCart}/{idClient}")
    public SalesDto create(@RequestBody SalesEntity sales, @PathVariable("idShoppingCart") Long idShoppingCart, @PathVariable("idClient") Long idClient) {
        return iSalesService.create(sales, idShoppingCart, idClient);
    }
}
