/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { clientModelId } from "../../models/clientModel";
import { updateAllFieldsClientOrAdmin } from "../../services/clientServices";
import "/src/css/styleMainPerfil.css";

export const MainPerfil = ({ login, dataClient, dataClientOrAdmin }) => {
  const videos = useMemo(
    () => [
      "/src/assets/videos/zapato4.mp4",
      "/src/assets/videos/zapato2.mp4",
      "/src/assets/videos/zapato3.mp4",
    ],
    []
  );
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [dataFormulary, setDataFormulary] = useState(clientModelId);
  const [erroState, setErrorState] = useState({});

  useEffect(() => {
    dataClientOrAdmin.password = "Null123";
    updateFieldsWithDataClient(dataClientOrAdmin);
  }, [dataClientOrAdmin]);

  useEffect(() => {
    const videoElement = document.querySelector(".video video");

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener("ended", handleVideoEnd);
    videoElement.play();

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [videos, currentVideoIndex]);

  useEffect(() => {
    const videoElement = document.querySelector(".video video");
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
  }, [currentVideoIndex, videos]);

  const {
    name,
    email,
    phone,
    address,
    identification,
    status,
    admin,
    password,
  } = dataFormulary;

  const handlerOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulary((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = {
      ...dataFormulary,
      admin: dataClientOrAdmin.admin,
      status: dataClientOrAdmin.status,
      id: dataClientOrAdmin.id,
    };
    updateFieldsWithDataClient(formDataToSend);
    validateFields();
    try {
      const data = await updateAllFieldsClientOrAdmin(formDataToSend);
      console.log(formDataToSend);
      console.log(data);
      dataClient(data.nameClientDto);
      setDataFormulary(data);
    } catch (error) {
      console.log(error);
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
    setDataFormulary((prevData) => ({
      ...prevData,
      name: name || dataClientOrAdmin.name,
      email: email || dataClientOrAdmin.email,
      phone: phone || dataClientOrAdmin.phone,
      address: address || dataClientOrAdmin.address,
      identification: identification || dataClientOrAdmin.identification,
      password: password || "Null123",
    }));
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
  
    setErrorState(errors);
    return Object.keys(errors).length === 0;
  };
  

  return (
    <>
      <main className="main-perfil">
        <div className="video">
          <video muted autoPlay></video>
        </div>
        <form
          onSubmit={handlerOnSubmit}
          className="container-input-perfil"
          action=""
        >
          <div className="container-form-1">
            <div className="form-perfil-input">
              <input
                value={name}
                onChange={handlerOnChange}
                name={"name"}
                className="input"
                type="text"
                id="name"
              />
              <label htmlFor="name" className="form-label-perfil">
                <span>NOMBRE</span>
              </label>
              {erroState.name && (
                <p className="error-message">{erroState.name}</p>
              )}
            </div>
            <div className="form-perfil-input">
              <input
                value={email}
                onChange={handlerOnChange}
                name={"email"}
                className="input"
                type="email"
                id="email"
              />
              <label htmlFor="email" className="form-label-perfil">
                <span>{"CORREO"}</span>
              </label>
              {erroState.email && (
                <p className="error-message">{erroState.email}</p>
              )}
            </div>
            <div className="form-perfil-input">
              <input
                value={address}
                onChange={handlerOnChange}
                name={"address"}
                className="input"
                type="text"
                id="address"
              />
              <label htmlFor="address" className="form-label-perfil">
                <span>DIRECCION</span>
              </label>
              {erroState.address && (
                <p className="error-message">{erroState.address}</p>
              )}
            </div>
          </div>
          <div className="container-form-1">
            <div className="form-perfil-input">
              <input
                value={phone}
                onChange={handlerOnChange}
                name={"phone"}
                className="input"
                type="text"
                id="phone"
              />
              <label htmlFor="phone" className="form-label-perfil">
                <span>TELEFONO</span>
              </label>
              {erroState.phone && (
                <p className="error-message">{erroState.phone}</p>
              )}
            </div>
            <div className="form-perfil-input">
              <input
                value={identification}
                onChange={handlerOnChange}
                name={"identification"}
                className="input"
                type="text"
                id="identification"
              />
              <label htmlFor="identification" className="form-label-perfil">
                <span>IDENTIFICACION</span>
              </label>
              {erroState.identification && (
                <p className="error-message">{erroState.identification}</p>
              )}
            </div>
            <div className="form-perfil-input">
              <input
                onChange={handlerOnChange}
                name={"password"}
                className="input"
                type="password"
                id="password"
              />
              <label htmlFor="password" className="form-label-perfil">
                <span>CONTRASEÑA</span>
              </label>
              {erroState.password && (
                <p className="error-message">{erroState.password}</p>
              )}
            </div>
          </div>
          <div className="container-form-1">
            {login.isAdmin && (
              <>
                <div className="form-perfil-input">
                  <button
                    className="button-perfil"
                    onClick={"va a pagina productos"}
                    type="button"
                  >
                    Ir Productos
                  </button>
                </div>
                <div className="form-perfil-input">
                  <button
                    className="button-perfil-admin"
                    onClick={"va a pagina administradores"}
                    type="button"
                  >
                    Ir Administradores
                  </button>
                </div>
              </>
            )}
            <div className="form-perfil-input">
              <button className="button-perfil" type="submit">
                Guardar
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};
