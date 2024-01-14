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

const configurationFile = () => {
  const token = sessionStorage.getItem("token");
  return {
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    },
  };
};

export const getAllProduct = async () => {
  try {
    const response = await axios.get("http://localhost:9090/product/getAll");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProductPages = async (currentPage, itemsPerPage) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPage/${currentPage}/${itemsPerPage}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNewProduct = async (stringProduct, img) => {
  try {
    console.log("stringProduct: ", stringProduct);
    console.log("img: ", img);

    const response = await axios.post(
      'http://localhost:9090/product/createProductImg',
      {
        product: stringProduct,
        img: img,
      },
      configurationFile()
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};