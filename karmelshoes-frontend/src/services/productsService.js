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
    },
  };
};

const configurationImg = () => {
  const token = sessionStorage.getItem("token");
  return {
    headers: {
      Authorization: token,
    },
    responseType: 'arraybuffer',
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

export const createNewProduct = async (product, img) => {
  try {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('status', product.status);
    formData.append('stock', product.stock);
    formData.append('productType', product.productType);
    formData.append('mark', product.mark);
    formData.append('model', product.model);
    formData.append('sizes', product.sizes);
    formData.append('color', product.color);
    formData.append('gender', product.gender);
    formData.append('code', product.code);
    formData.append('img', img);

    const response = await axios.post(
      'http://localhost:9090/product/createProductImg',
      formData,
      configurationFile()
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProductById = async (product, img, id) => {
  try {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('status', product.status);
    formData.append('stock', product.stock);
    formData.append('productType', product.productType);
    formData.append('mark', product.mark);
    formData.append('model', product.model);
    formData.append('sizes', product.sizes);
    formData.append('color', product.color);
    formData.append('gender', product.gender);
    formData.append('code', product.code);
    formData.append('img', img);

    const response = await axios.put(
      `http://localhost:9090/product/update/${id}`,
      formData,
      configurationFile()
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getImgProductById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:9090/product/getImgProductById/${id}`, configurationImg());
    return data.data;
  } catch (error) {
    throw error;
  }
}



