import { Link } from "react-router-dom";

export const MainLoging = () => {
  return (
    <>
      <main className="main-loging">
        <div className="div-loging">
          <img src="/src/assets/imgs/icons8-user-48.png" alt="" />
        </div>
        <form className="section-loging">
          <div className="section-loging-1">
            <Link to={"/"}>
              <img src="/src/assets/imgs/circulo-marca-x.svg" alt="" />
            </Link>
          </div>
          <div className="input-name">
            <label htmlFor="name">
              <img src="/src/assets/imgs/circulo-de-usuario.svg" alt="" />
            </label>
            <input type="text" id="name" placeholder="Nombre" />
          </div>
          <div className="input-password">
            <label htmlFor="password">
              <img src="/src/assets/imgs/cerrar.svg" alt="" />
            </label>
            <input type="password" id="password" placeholder="Contraseña" />
          </div>
          <div className="input-save-password">
            <label htmlFor="save-password">
              <h5>Recordar Contraseña</h5>
            </label>
            <input type="checkbox" id="save-password" />
            <Link to={"/"}>
                <h5>¿Has olvidado tu contraseña?</h5>
            </Link>
          </div>
          <input className="input-submit" type="submit" value="Iniciar" />
        </form>
      </main>
    </>
  );
};