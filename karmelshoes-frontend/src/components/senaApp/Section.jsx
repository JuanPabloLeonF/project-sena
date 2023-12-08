import { Link } from "react-router-dom";
import "/src/css/styleSection.css";

export const Section = ({showLoging, showRegistrer}) => {
  return (
    <>
      <section className="section">
        <h2>Calzado</h2>
        <Link onClick={showRegistrer}>Registrarse</Link>
        <Link onClick={showLoging}>Inicio</Link>
      </section>
    </>
  );
};
