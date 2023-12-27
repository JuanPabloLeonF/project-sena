/* eslint-disable react/prop-types */
import { FormInputFormularyData } from "./FormInputFormularyData";

export const DivContainerInputFormularyUpdate = ({
  clientModelId,
  handlerOnChange,
  erroState,
}) => {
  const { name, email, phone, address, identification } = clientModelId;
  return (
    <>
      <div className="container-form-1">
        <FormInputFormularyData
          label="NOMBRE"
          name="name"
          value={name}
          onChange={handlerOnChange}
          type="text"
          id="name"
          error={erroState.name}
        />
        <FormInputFormularyData
          label="CORREO"
          name="email"
          value={email}
          onChange={handlerOnChange}
          type="email"
          id="email"
          error={erroState.email}
        />
        <FormInputFormularyData
          label="DIRECCION"
          name="address"
          value={address}
          onChange={handlerOnChange}
          type="text"
          id="address"
          error={erroState.address}
        />
      </div>
      <div className="container-form-1">
        <FormInputFormularyData
          label="TELEFONO"
          name="phone"
          value={phone}
          onChange={handlerOnChange}
          type="text"
          id="phone"
          error={erroState.phone}
        />
        <FormInputFormularyData
          label="IDENTIFICACION"
          name="identification"
          value={identification}
          onChange={handlerOnChange}
          type="text"
          id="identification"
          error={erroState.identification}
        />
        <FormInputFormularyData
          label="CONTRASEÑA"
          name="password"
          value=""
          onChange={handlerOnChange}
          type="password"
          id="password"
          error={erroState.password}
        />
      </div>
    </>
  );
};
