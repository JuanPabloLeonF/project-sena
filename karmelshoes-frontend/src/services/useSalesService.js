/* eslint-disable no-useless-catch */
import axios from "axios";

export const getSalesByIdClient = async (clientId) => {
  try {
    const response = await axios.get(`http://localhost:9090/sales/getByIdClient/${clientId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
