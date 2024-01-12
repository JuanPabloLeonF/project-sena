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

export const createNewColor = async ({ name }) => {
  try {
    const data = await axios.post(
      "http://localhost:9090/color/create",
      {
        name,
      },
      configuration
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const prueba = async () => {
  const data = await createNewColor({ name: "ROJO" });
  console.log(data);
};

prueba();