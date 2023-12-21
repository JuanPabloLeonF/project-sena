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
