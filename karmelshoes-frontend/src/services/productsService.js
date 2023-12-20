/* eslint-disable no-useless-catch */

import axios from "axios";

export const getAllProduct = async () => {
  try {
    const response = await axios.get("http://localhost:9090/product/getAll");
    return response.data;
  } catch (error) {
    throw error;
  }
};