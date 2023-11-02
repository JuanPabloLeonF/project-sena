package com.karmelshoes.persistency.validation;

import com.karmelshoes.persistency.entity.ClientEntity;

public class ValidationLogic {

    public static Boolean validateIsClientDelete(ClientEntity client) {
        if (client.getStatus()) {
            return true;
        }
        return false;
    }
}
