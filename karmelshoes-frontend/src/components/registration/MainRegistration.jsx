import { Link } from "react-router-dom";
import "/src/css/styleSectionRegistration.css";
import { useSateRegistration } from "../../hooks/useSateRegistration";
import { useEffect } from "react";

export const MainRegistration = ({ showRegistrer, showLoging }) => {
  const {
    handlerOnSubmit,
    handlerOnChange,
    errors,
    serverError,
    name,
    email,
    phone,
    address,
    identification,
    status,
    admin,
    password,
  } = useSateRegistration();

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
                className={errors.name ? "error" : ""}
              />
              <label
                htmlFor="name"
                className={`form-label ${errors.name ? "error-label" : ""}`}
              >
                <span
                  className={`placeholder-text ${
                    errors.name ? "error-text" : ""
                  }`}
                >
                  {errors.name ? errors.name : "Nombre:"}
                </span>
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
                className={errors.email ? "error" : ""}
              />
              <label
                htmlFor="email"
                className={`form-label ${errors.email ? "error-label" : ""}`}
              >
                <span
                  className={`placeholder-text ${
                    errors.email ? "error-text" : ""
                  }`}
                >
                  {errors.email ? errors.email : "Correo:"}
                </span>
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
                className={errors.identification ? "error" : ""}
              />
              <label
                htmlFor="identification"
                className={`form-label ${
                  errors.identification ? "error-label" : ""
                }`}
              >
                <span
                  className={`placeholder-text ${
                    errors.identification ? "error-text" : ""
                  }`}
                >
                  {errors.identification
                    ? errors.identification
                    : "Cedula De Ciudadania:"}
                </span>
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
                className={errors.address ? "error" : ""}
              />
              <label
                htmlFor="address"
                className={`form-label ${errors.address ? "error-label" : ""}`}
              >
                <span
                  className={`placeholder-text ${
                    errors.address ? "error-text" : ""
                  }`}
                >
                  {errors.address ? errors.address : "Direccion:"}
                </span>
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
                className={errors.phone ? "error" : ""}
              />
              <label
                htmlFor="phone"
                className={`form-label ${errors.phone ? "error-label" : ""}`}
              >
                <span
                  className={`placeholder-text ${
                    errors.phone ? "error-text" : ""
                  }`}
                >
                  {errors.phone ? errors.phone : "Telefono:"}
                </span>
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
                className={errors.password ? "error" : ""}
              />
              <label
                htmlFor="password"
                className={`form-label ${errors.password ? "error-label" : ""}`}
              >
                <span
                  className={`placeholder-text ${
                    errors.password ? "error-text" : ""
                  }`}
                >
                  {errors.password ? errors.password : "Contraseña:"}
                </span>
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
        {serverError && (
          <article className="message-error">
            <h2>No se puede regitrar, Ya existe este correo: {email}</h2>
          </article>
        )}
      </section>
    </>
  );
};
