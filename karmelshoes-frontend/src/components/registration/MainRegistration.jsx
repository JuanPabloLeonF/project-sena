import { Link } from "react-router-dom";
import "/src/css/styleSectionRegistration.css";

export const MainRegistration = ({showRegistrer}) => {
  return (
    <>
      <section className="sectionRegistration">
        <img className="img" src="/src/assets/imgs/foto-registro.jfif" alt="" />
        <article className="arcticle">
          <Link onClick={showRegistrer}>
            <img src="/src/assets/imgs/circulo-marca-x.png" alt="" />
          </Link>
          <form className="formulary">
            <div className="form-group">
              <input type="text" id="name" required/>
              <label htmlFor="name" className="form-label">
                <span className="placeholder-text">Nombre:</span>
              </label>
            </div>
            <div className="form-group">
              <input type="email" id="email" required />
              <label htmlFor="email" className="form-label">
                <span className="placeholder-text">Correo:</span>
              </label>
            </div>
            <div className="form-group">
              <input type="text" id="identification" required />
              <label htmlFor="identification" className="form-label">
                <span className="placeholder-text">Cedula de ciudadania:</span>
              </label>
            </div>
            <div className="form-group">
              <input type="text" id="address" required />
              <label htmlFor="address" className="form-label">
                <span className="placeholder-text">Direccion:</span>
              </label>
            </div>
            <div className="form-group">
              <input type="text" id="phone" required/>
              <label htmlFor="phone" className="form-label">
                <span className="placeholder-text">Telefono/Movil:</span>
              </label>
            </div>
            <div className="form-group">
              <input type="password" id="password" required/>
              <label htmlFor="password" className="form-label">
                <span className="placeholder-text">Contraseña:</span>
              </label>
            </div>
            <button className="button" type="submit">Registrarse</button>
          </form>
        </article>
      </section>
    </>
  );
};
