import { Link } from "react-router-dom";
import { logingModel } from "../../models/logingModel";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../context/AuthenticationProvider";

export const FormularyLogingOrigy = ({ showLoging, showForgotPassword }) => {
  const [dataFormulary, setDataFormulary] = useState(logingModel);
  const {name, password} = dataFormulary;
  const {handlerLoging} = useContext(AuthenticationContext);

  const handlerOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulary((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    setDataFormulary(logingModel);
    showLoging();
    handlerLoging(dataFormulary);
  };


  return (
    <>
      <form onSubmit={handlerOnSubmit} className="section-loging">
        <div className="section-loging-1">
          <Link onClick={showLoging}>
            <img src="/src/assets/imgs/circulo-marca-x.svg" alt="" />
          </Link>
        </div>
        <div className="input-name">
          <label htmlFor="name">
            <img src="/src/assets/imgs/circulo-de-usuario.svg" alt="" />
          </label>
          <input
            onChange={handlerOnChange}
            value={name}
            name="name"
            className="input-loging"
            type="text"
            id="name"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="input-password">
          <label htmlFor="password">
            <img src="/src/assets/imgs/cerrar.svg" alt="" />
          </label>
          <input
            onChange={handlerOnChange}
            value={password}
            name="password"
            className="input-loging"
            type="password"
            id="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="input-save-password">
          <label htmlFor="save-password">
            <h5>Recordar Contraseña</h5>
          </label>
          <input className="input-loging" type="checkbox" id="save-password" />
          <Link onClick={showForgotPassword}>
            <h5>¿Has olvidado tu contraseña?</h5>
          </Link>
        </div>
        <input className="input-submit" type="submit" value="Iniciar" />
      </form>
    </>
  );
};
