package com.karmelshoes.persistency.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "client")
public class ClientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @NotBlank(message = "El campo name no puede estar vacio")
    @Size(min = 4, max = 70, message = "El campo name no puede ser menor de 4 caracteres o mayor de 70")
    @Column(name = "name", length = 70)
    private String name;
    @Email(message = "El email no tiene el formato correcto")
    @Size(min = 15, max = 100)
    @Column(name = "email", length = 100, unique = true)
    private String email;
    @NotBlank(message = "El campo phone no puede estar vacio")
    @Pattern(regexp = "\\+57 \\d{10}", message = "El formato del phone debe ser +57 seguido de 10 dígitos")
    @Column(name = "phone", length = 16)
    private String phone;
    @NotBlank(message = "El campo address no puede estar vacio")
    @Size(min = 8, max = 200, message = "el campo address debe contener minimo 8 caracteres o maximo 200")
    @Column(name = "address")
    private String address;

    @Column(name = "status", nullable = false)
    private Boolean status;

    public Boolean getStatus() {
        return status;
    }

    public Boolean isStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
