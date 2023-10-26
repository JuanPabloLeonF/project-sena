package com.karmelshoes.persistency.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "shoes")
public class ShoesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long idShoes;

    @Column(name = "mark")
    private String mark;

    @Column(name = "model")
    private String model;

    @Column(name = "size")
    private Long size;

    @Column(name = "color")
    private String color;

    public ShoesEntity() {
    }

    public Long getIdShoes() {
        return idShoes;
    }

    public void setIdShoes(Long idShoes) {
        this.idShoes = idShoes;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
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
}
