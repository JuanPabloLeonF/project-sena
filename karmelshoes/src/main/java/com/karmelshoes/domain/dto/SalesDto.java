package com.karmelshoes.domain.dto;

import com.karmelshoes.persistency.entity.ClientEntity;
import java.time.LocalDate;

public class SalesDto {

    private Long idSalesDto;
    private Double saleAmountSalesDto;
    private LocalDate dateSalesDto;
    private String paymentMethodSalesDto;
    private Long shoppingCartIdSalesDto;

    public Long getIdSalesDto() {
        return idSalesDto;
    }

    public void setIdSalesDto(Long idSalesDto) {
        this.idSalesDto = idSalesDto;
    }

    public Double getSaleAmountSalesDto() {
        return saleAmountSalesDto;
    }

    public void setSaleAmountSalesDto(Double saleAmountSalesDto) {
        this.saleAmountSalesDto = saleAmountSalesDto;
    }

    public LocalDate getDateSalesDto() {
        return dateSalesDto;
    }

    public void setDateSalesDto(LocalDate dateSalesDto) {
        this.dateSalesDto = dateSalesDto;
    }

    public String getPaymentMethodSalesDto() {
        return paymentMethodSalesDto;
    }

    public void setPaymentMethodSalesDto(String paymentMethodSalesDto) {
        this.paymentMethodSalesDto = paymentMethodSalesDto;
    }

    public Long getShoppingCartIdSalesDto() {
        return shoppingCartIdSalesDto;
    }

    public void setShoppingCartIdSalesDto(Long shoppingCartIdSalesDto) {
        this.shoppingCartIdSalesDto = shoppingCartIdSalesDto;
    }
}
