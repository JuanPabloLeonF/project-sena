/* eslint-disable no-useless-catch */

import axios from "axios";

const configuration = () => {
  const token = sessionStorage.getItem("token");
  return {
    headers: {
      Authorization:token,
      "Content-Type": "application/json",
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