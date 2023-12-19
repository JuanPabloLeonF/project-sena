import { Link } from "react-router-dom";
import "/src/css/styleSection.css";

export const Section = ({login, showLoging, showRegistrer, handlerLogout}) => {

  const renderSectionIfIsAuth = () => {
    if (!login.isAuth) {
      return (
        <section className="section">
          <h2>Calzado</h2>
          <Link onClick={showRegistrer}>Registrarse</Link>
          <Link onClick={showLoging}>Inicio</Link>
        </section>
      );
    } else {
      return (
      <section className="section">
        <h2>Bienvenido</h2>
        <Link onClick={handlerLogout}>Cerrar Sesion</Link>
        <h2 className="h2-name">{login.user.name}</h2>
      </section>
      );
    }
  };

  return <>{renderSectionIfIsAuth()}</>;
};
