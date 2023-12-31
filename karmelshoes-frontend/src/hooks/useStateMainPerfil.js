import { useReducer } from "react";
import { mainPerfilReducer } from "../reducer/mainPerfilReducer";
import { mainPerfilStateInitial } from "../models/mainPerfilStateInitial";
import { updateAllFieldsClientOrAdmin } from "../services/clientServices";

export const useStateMainPerfil = (dataClientOrAdmin, dataClientById) => {
  const [state, dispatch] = useReducer(
    mainPerfilReducer,
    mainPerfilStateInitial
  );
  const { clientModelId, erroState, formSubmissionStatus } = state;

  const { name, email, phone, address, identification, password } =
    clientModelId;

  const handlerOnChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "SET_CLIENT_MODEL_ID",
      payload: {
        ...clientModelId,
        [name]: value,
      },
    });
  };

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = {
      ...clientModelId,
      admin: dataClientOrAdmin.admin,
      status: dataClientOrAdmin.status,
      id: dataClientOrAdmin.id,
    };
    updateFieldsWithDataClient(formDataToSend);
    validateFields();
    try {
      const data = await updateAllFieldsClientOrAdmin(formDataToSend);
      if (dataClientById !== null) {
        dataClientById(dataClientOrAdmin.id);
      }
      dispatch({ type: "SET_CLIENT_MODEL_ID", payload: data });
      dispatch({
        type: "SET_FORM_SUBMISSION_STATUS",
        payload: "Los Datos Se Han Actualizado Correctamente",
      });
    } catch (error) {
      if (error.response?.status === 400 || error.response?.status === 403) {
        if (error.response?.status === 403) {
          dispatch({
            type: "SET_FORM_SUBMISSION_STATUS",
            payload: "El Correo O La Identificacion Ya Existen",
          });
        }
      } else {
        throw error;
      }
    }
  };

  const updateFieldsWithDataClient = ({
    name,
    email,
    phone,
    address,
    identification,
    password,
  }) => {
    dispatch({
      type: "SET_CLIENT_MODEL_ID",
      payload: {
        ...clientModelId,
        name: name || dataClientOrAdmin.name,
        email: email || dataClientOrAdmin.email,
        phone: phone || dataClientOrAdmin.phone,
        address: address || dataClientOrAdmin.address,
        identification: identification || dataClientOrAdmin.identification,
        password: password || "Null123",
      },
    });
  };

  const validateFields = () => {
    const errors = {};

    if (!name || name.length < 6 || name.length > 70) {
      errors.name = "Debe tener entre 4 y 70 caracteres";
    }

    if (!email || email.length < 15 || email.length > 100) {
      errors.email = "Debe tener entre 15 y 100 caracteres";
    }

    if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      errors.email = "El email no tiene el formato correcto";
    }

    if (!phone || !/\+57 \d{10}/.test(phone)) {
      errors.phone = "Debe ser con +57 seguido de 10 dígitos";
    }

    if (!address || address.length < 8 || address.length > 200) {
      errors.address = "Debe tener entre 8 y 200 caracteres";
    }

    if (!identification || !/\d{8,10}/.test(identification)) {
      errors.identification =
        "Un máximo de 10 números y un mínimo de 8 números.";
    }

    if (password) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
      if (!passwordRegex.test(password)) {
        errors.password =
          "Debe tener una letra mayúscula, una letra minúscula y un número";
      }
    }

    dispatch({
      type: "SET_ERROR_STATE",
      payload: errors,
    });

    return Object.keys(errors).length === 0;
  };

  return {
    updateFieldsWithDataClient,
    formSubmissionStatus,
    handlerOnSubmit,
    handlerOnChange,
    erroState,
    clientModelId,
  };
};
