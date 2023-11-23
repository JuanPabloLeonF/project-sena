import { NavLink } from "react-router-dom";

export const ContainerNavOne = () => {
  return (
    <>
      <div className="container-nav-1">
        <img
          src="/src/assets/imgs/location-dot-solid.svg"
          alt="logo-ubucacion"
        />
        <a href="">Tienda</a>
        <img src="/src/assets/imgs/interrogatorio.svg" alt="" />
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to={"/whoWeAre"}
        >
          ¿Quienes somos?
        </NavLink>
        <img src="/src/assets/imgs/phone-solid.svg" alt="logo-telefono" />
        <a href="">Servicio al cliente</a>
      </div>
    </>
  );
};
