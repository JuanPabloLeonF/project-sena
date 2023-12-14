import { Link } from "react-router-dom";

import "/src/css/styleFormularyForgotPassword.css"

export const FormularyForgotPasword = ({showForgotPassword}) => {
  return (
    <>
      <form className="section-loging">
        <div className="section-loging-1">
          <Link onClick={showForgotPassword}>
            <img src="/src/assets/imgs/flecha-circulo-izquierda.png" alt="" />
          </Link>
        </div>
        <div className="input-name">
          <label htmlFor="new-password">
            <img src="/src/assets/imgs/cerrar.svg" alt="" />
          </label>
          <input type="password" id="new-password" placeholder="Nueva Contraseña" />
        </div>
        <div className="input-password">
          <label htmlFor="repeat-password">
            <img src="/src/assets/imgs/cerrar.svg" alt="" />
          </label>
          <input type="password" id="repeat-password" placeholder="Repite Contraseña" />
        </div>
        <div className="input-save-password-forgot">
          <label htmlFor="save-password">
            <h5>Recordar Contraseña</h5>
          </label>
          <input type="checkbox" id="save-password" />
        </div>
        <input onClick={showForgotPassword} className="input-submit" type="submit" value="Guardar" />
      </form>
    </>
  );
};
