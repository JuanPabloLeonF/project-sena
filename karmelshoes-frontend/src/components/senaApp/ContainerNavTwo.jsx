import { NavLink } from "react-router-dom";

export const ContainerNavTwo = ({showLady, showGentleman, showBoy, activeLady, activeGentleman, activeChild}) => {
  return (
    <>
      <div className="container-nav-2 navLink">
        <NavLink
          className={activeLady ? "active-link-people" : null}
          onClick={showLady}
        >
          <h3>Dama</h3>
        </NavLink>
        <NavLink
          className={activeGentleman ? "active-link-people" : null}
          onClick={showGentleman}
        >
          <h3>Caballero</h3>
        </NavLink>
        <NavLink
          className={activeChild ? "active-link-people" : null}
          onClick={showBoy}
        >
          <h3>Niño</h3>
        </NavLink>
      </div>
    </>
  );
};
