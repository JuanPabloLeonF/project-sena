package com.karmelshoes.persistency.mappers;

import com.karmelshoes.domain.dto.ClientDto;
import com.karmelshoes.persistency.entity.ClientEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface IClientMapper {

    @Mappings(value = {
            @Mapping(target = "id", source = "clientDto.idClientDto"),
            @Mapping(target = "name", source = "clientDto.nameClientDto"),
            @Mapping(target = "email", source = "clientDto.emailClientDto"),
            @Mapping(target = "address", source = "clientDto.addressClientDto"),
            @Mapping(target = "phone", source = "clientDto.phoneClientDto"),
            @Mapping(target = "status", source = "clientDto.statusClientDto")
    })
    ClientEntity clientDtoToClientEntity(ClientDto clientDto);

    @InheritInverseConfiguration
    ClientDto clientEntityToClientDto(ClientEntity clientEntity);
}
