import { useReducer } from "react";
import { mainPerfilStateInitial } from "../models/mainPerfilStateInitial";
import { mainPerfilReducer } from "../reducer/mainPerfilReducer";
import {
    deleteAdminById,
  getClientById,
  updateAllFieldsClientOrAdmin,
} from "../services/clientServices";

export const useStateDataAdmin = (dataAdmin) => {
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

  const handlerDeleteAdmin = async (dataAdmin) => {
    const id = dataAdmin.id;
    if (id !== 0) {
      try {
        const data = await deleteAdminById(id);
        console.log(data);
        const newData = normalizeClientData(data.data);
        dispatch({ type: "SET_CLIENT_MODEL_ID", payload: newData });
      } catch (error) {
        console.log("no fue eliminado: ", error);
      }
    }
  };

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = {
      ...clientModelId,
      admin: dataAdmin.admin,
      status: dataAdmin.status,
      id: dataAdmin.id,
    };
    updateFieldsWithDataClient(formDataToSend);
    if (validateFields()) {
      try {
        const data = await updateAllFieldsClientOrAdmin(formDataToSend);
        const newData = normalizeClientData(data.data);
        dispatch({ type: "SET_CLIENT_MODEL_ID", payload: newData });
        dispatch({
          type: "SET_FORM_SUBMISSION_STATUS",
          payload: "Los Datos Se Han Actualizado Correctamente",
        });
        console.log(state);
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
    } else {
      console.log("los campos error");
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
        name: name || dataAdmin.name,
        email: email || dataAdmin.email,
        phone: phone || dataAdmin.phone,
        address: address || dataAdmin.address,
        identification: identification || dataAdmin.identification,
        password: password || "Null123",
      },
    });
  };

  const normalizeClientData = (data) => {
    return {
      id: data.idClientDto || 0,
      name: data.nameClientDto || "",
      email: data.emailClientDto || "",
      phone: data.phoneClientDto || "",
      address: data.addressClientDto || "",
      identification: data.identificationDto || "",
      admin: data.adminClientDto || false,
      password: data.passwordClientDto || "",
      status: data.statusClientDto || true,
    };
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
    handlerDeleteAdmin,
  };
};
