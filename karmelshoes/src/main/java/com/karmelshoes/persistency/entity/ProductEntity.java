package com.karmelshoes.persistency.entity;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.URL;

import java.util.List;

@Entity
@Table(name = "product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Size(min = 2, max = 200, message = "El nombre debe tener entre 2 y 200 caracteres")
    @Column(name = "name", length = 200)
    private String name;

    @Size(min = 8, message = "La descripción debe tener al menos 8 caracteres")
    @NotBlank(message = "La descripción no puede estar en blanco")
    @Column(name = "description")
    private String description;

    @Min(value = 0 , message = "El precio debe ser mayor o igual a 0.00")
    @Digits(integer = 10, fraction = 2, message = "El precio debe tener como máximo 10 dígitos en total, con 2 decimales")
    @Column(name = "price", nullable = false)
    private Double price;

    @NotBlank(message = "El stock no puede estar en blanco")
    @Min(value = 0, message = "El valor debe ser igual o mayor que cero")
    @Column(name = "stock")
    private Integer stock;

    @NotBlank(message = "El tipo de producto no puede estar en blanco")
    @Size(min = 4, max = 200, message = "El tipo de producto debe tener entre 4 y 200 caracteres")
    @Column(name = "product_type", length = 200)
    private String productType;

    @NotBlank(message = "La marca no puede estar en blanco")
    @Size(min = 4, max = 200, message = "La marca debe tener entre 4 y 200 caracteres")
    @Column(name = "mark", length = 200)
    private String mark;

    @NotBlank(message = "El modelo no puede estar en blanco")
    @Size(min = 4, max = 200, message = "El modelo debe tener entre 4 y 200 caracteres")
    @Column(name = "model", length = 200)
    private String model;

    @ElementCollection
    @CollectionTable(
            name = "product_sizes",
            joinColumns = @JoinColumn(name = "product_id")
    )
    @Column(name = "size")
    private List<Integer> sizes;

    @NotBlank(message = "El color no puede estar en blanco")
    @Size(min = 4, max = 200, message = "El color debe tener entre 4 y 200 caracteres")
    @Column(name = "color", length = 200)
    private String color;

    @NotBlank(message = "El género debe ser 'M' o 'F'")
    @Pattern(regexp = "[MF]", message = "El género debe ser 'M' o 'F'")
    @Size(min = 1, max = 1, message = "El género debe tener 1 carácter")
    @Column(name = "gender", length = 1)
    private String gender;

    @NotBlank(message = "La imagen no puede estar en blanco")
    @URL(message = "La imagen debe ser una URL válida")
    @Column(name = "img")
    private String img;

    public List<Integer> getSizes() {
        return sizes;
    }

    public void setSizes(List<Integer> sizes) {
        this.sizes = sizes;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return name;
    }
}
