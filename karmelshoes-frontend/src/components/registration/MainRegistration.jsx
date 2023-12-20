import { Link } from "react-router-dom";
import { useState } from "react";
import { clientModel } from "../../models/clientModel";
import { createClientOrAdmin } from "../../services/clientServices";
import "/src/css/styleSectionRegistration.css";

export const MainRegistration = ({ showRegistrer, showLoging }) => {
  const [registrationData, setRegistrationData] = useState(clientModel);
  const {
    name,
    email,
    phone,
    address,
    identification,
    status = true,
    admin,
    password,
  } = registrationData;

  const handlerOnChange = (event) => {
    const { name, value, type, checked } = event.target;
    setRegistrationData((prevData) => {
      if (type === "radio" && name === "admin") {
        return {
          ...prevData,
          admin: value === "true",
        };
      } else {
        return {
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        };
      }
    });
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    console.log(registrationData);
    createClientOrAdmin(registrationData);
    setRegistrationData(clientModel);
    showLoging();
  };

  return (
    <>
      <section className="sectionRegistration">
        <img className="img" src="/src/assets/imgs/foto-registro.jfif" alt="" />
        <article className="arcticle">
          <Link onClick={showRegistrer}>
            <img src="/src/assets/imgs/circulo-marca-x.png" alt="" />
          </Link>
          <form onSubmit={handlerOnSubmit} className="formulary">
            <div className="form-group">
              <input
                onChange={handlerOnChange}
                value={name}
                name="name"
                type="text"
                id="name"
                required
              />
              <label htmlFor="name" className="form-label">
                <span className="placeholder-text">Nombre:</span>
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handlerOnChange}
                value={email}
                name="email"
                type="email"
                id="email"
                required
              />
              <label htmlFor="email" className="form-label">
                <span className="placeholder-text">Correo:</span>
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handlerOnChange}
                value={identification}
                name="identification"
                type="text"
                id="identification"
                required
              />
              <label htmlFor="identification" className="form-label">
                <span className="placeholder-text">Cedula de ciudadania:</span>
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handlerOnChange}
                value={address}
                name="address"
                type="text"
                id="address"
                required
              />
              <label htmlFor="address" className="form-label">
                <span className="placeholder-text">Direccion:</span>
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handlerOnChange}
                value={phone}
                name="phone"
                type="text"
                id="phone"
                required
              />
              <label htmlFor="phone" className="form-label">
                <span className="placeholder-text">Telefono/Movil (+57):</span>
              </label>
            </div>
            <div className="form-group">
              <input
                onChange={handlerOnChange}
                value={password}
                name="password"
                type="password"
                id="password"
                required
              />
              <label htmlFor="password" className="form-label">
                <span className="placeholder-text">Contraseña:</span>
              </label>
            </div>
            <div className="form-input-radio">
              <div className="radio">
                <input
                  onChange={handlerOnChange}
                  defaultChecked
                  value={false}
                  type="radio"
                  name="admin"
                  id="client"
                />
                <label htmlFor="client">Cliente</label>
              </div>
              <div className="radio">
                <input
                  onChange={handlerOnChange}
                  value={true}
                  type="radio"
                  name="admin"
                  id="admin"
                />
                <label htmlFor="admin">Administrador</label>
              </div>
              <button className="button" type="submit">
                Registrarse
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};
