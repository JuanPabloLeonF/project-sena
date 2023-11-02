package com.karmelshoes.domain.dto;

import java.util.List;

public class ProductDto {

    private Long idProductDto;
    private String nameProductDto;
    private String descriptionProductDto;
    private Double priceProductDto;
    private Integer stockProductDto;
    private String productTypeProductDto;
    private String markProductDto;
    private String modelProductDto;
    private List<Integer> sizesProductDto;
    private String colorProductDto;
    private String genderProductDto;
    private String imgProductDto;

    public Long getIdProductDto() {
        return idProductDto;
    }

    public void setIdProductDto(Long idProductDto) {
        this.idProductDto = idProductDto;
    }

    public String getNameProductDto() {
        return nameProductDto;
    }

    public void setNameProductDto(String nameProductDto) {
        this.nameProductDto = nameProductDto;
    }

    public String getDescriptionProductDto() {
        return descriptionProductDto;
    }

    public void setDescriptionProductDto(String descriptionProductDto) {
        this.descriptionProductDto = descriptionProductDto;
    }

    public Double getPriceProductDto() {
        return priceProductDto;
    }

    public void setPriceProductDto(Double priceProductDto) {
        this.priceProductDto = priceProductDto;
    }

    public Integer getStockProductDto() {
        return stockProductDto;
    }

    public void setStockProductDto(Integer stockProductDto) {
        this.stockProductDto = stockProductDto;
    }

    public String getProductTypeProductDto() {
        return productTypeProductDto;
    }

    public void setProductTypeProductDto(String productTypeProductDto) {
        this.productTypeProductDto = productTypeProductDto;
    }

    public String getMarkProductDto() {
        return markProductDto;
    }

    public void setMarkProductDto(String markProductDto) {
        this.markProductDto = markProductDto;
    }

    public String getModelProductDto() {
        return modelProductDto;
    }

    public void setModelProductDto(String modelProductDto) {
        this.modelProductDto = modelProductDto;
    }

    public List<Integer> getSizesProductDto() {
        return sizesProductDto;
    }

    public void setSizesProductDto(List<Integer> sizesProductDto) {
        this.sizesProductDto = sizesProductDto;
    }

    public String getColorProductDto() {
        return colorProductDto;
    }

    public void setColorProductDto(String colorProductDto) {
        this.colorProductDto = colorProductDto;
    }

    public String getGenderProductDto() {
        return genderProductDto;
    }

    public void setGenderProductDto(String genderProductDto) {
        this.genderProductDto = genderProductDto;
    }

    public String getImgProductDto() {
        return imgProductDto;
    }

    public void setImgProductDto(String imgProductDto) {
        this.imgProductDto = imgProductDto;
    }
}
