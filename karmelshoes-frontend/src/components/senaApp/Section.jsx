import { Link } from "react-router-dom";
import "/src/css/styleSection.css"

export const Section = () => {
  return (
    <>
      <section className="section">
        <h2>Calzado</h2>
        <Link to={"/registration"}>Registrarse</Link>
          <a href="">Inicio</a>
      </section>
    </>
  );
};
