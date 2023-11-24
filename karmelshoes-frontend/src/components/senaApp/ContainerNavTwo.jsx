import { NavLink } from "react-router-dom";

export const ContainerNavTwo = () => {
  return (
    <>
      <div className="container-nav-2 navLink">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link-people" : null)}
          to={"/lady"}
        >
          <h3>Dama</h3>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link-people" : null)}
          to={"/gentleman"}
        >
          <h3>Caballero</h3>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link-people" : null)}
          to={"/child "}
        >
          <h3>Niño</h3>
        </NavLink>
      </div>
    </>
  );
};