/* eslint-disable no-useless-catch */

import axios from "axios";


const configuration = () => {
    const token = sessionStorage.getItem("token");
    return {
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
    };
};

export const createByIdClientOneShoppingCart = async (clientId) => {
    try {
        const response = await axios.post(
            `http://localhost:5173/shoppingCart/create/${clientId}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addProductToShoppingCart = async (shoppingCartId, productId) => {
    try {
        const response = await axios.put(
            `http://localhost:5173/shoppingCart/addProduct/${shoppingCartId}/${productId}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}