package com.karmelshoes.domain.dto;

public class ClientDto {

    private Long idClientDto;
    private String nameClientDto;
    private String emailClientDto;
    private String phoneClientDto;
    private String addressClientDto;
    private Boolean statusClientDto;

    public Long getIdClientDto() {
        return idClientDto;
    }

    public void setIdClientDto(Long idClientDto) {
        this.idClientDto = idClientDto;
    }

    public String getNameClientDto() {
        return nameClientDto;
    }

    public void setNameClientDto(String nameClientDto) {
        this.nameClientDto = nameClientDto;
    }

    public String getEmailClientDto() {
        return emailClientDto;
    }

    public void setEmailClientDto(String emailClientDto) {
        this.emailClientDto = emailClientDto;
    }

    public String getPhoneClientDto() {
        return phoneClientDto;
    }

    public void setPhoneClientDto(String phoneClientDto) {
        this.phoneClientDto = phoneClientDto;
    }

    public String getAddressClientDto() {
        return addressClientDto;
    }

    public void setAddressClientDto(String addressClientDto) {
        this.addressClientDto = addressClientDto;
    }

    public Boolean getStatusClientDto() {
        return statusClientDto;
    }

    public void setStatusClientDto(Boolean statusClientDto) {
        this.statusClientDto = statusClientDto;
    }
}
