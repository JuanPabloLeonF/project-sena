/* eslint-disable no-useless-catch */
import axios from "axios";

export const createClientOrAdmin = async ({
  name,
  email,
  phone,
  address,
  identification,
  status,
  admin,
  password,
}) => {
  try {
    return await axios.post("http://localhost:9090/client/create", {
      name,
      email,
      phone,
      address,
      identification,
      status,
      admin,
      password,
    });
  } catch (error) {
    throw error;
  }
};

export const updateAllFieldsClientOrAdmin = async ({
  id,
  name,
  email,
  phone,
  address,
  identification,
  status,
  admin,
  password,
}) => {
  try {
    return await axios.put(`http://localhost:9090/client/updateAll/${id}`, {
      name,
      email,
      phone,
      address,
      identification,
      status,
      admin,
      password,
    });
  } catch (error) {
    throw error;
  }
};

export const getClientByName = async (name) => {
  try {
    const response = await axios.get(`http://localhost:9090/client/getByName/${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
