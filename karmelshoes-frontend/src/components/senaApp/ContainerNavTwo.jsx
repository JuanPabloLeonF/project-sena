/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { getAllProductPageByGender } from "../../services/productsService";

export const ContainerNavTwo = ({
  dataTableProductAvailable,
  showLady,
  showGentleman,
  showBoy,
  activeLady,
  activeGentleman,
  activeChild
}) => {

  const handlerOnClickLinkOne = async () => {
    showLady();
    try {
      const data = await getAllProductPageByGender(0, 9, "DAMA");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerOnClickLinkTwo = async () => {
    showGentleman();
    try {
      const data = await getAllProductPageByGender(0, 9, "CABALLERO");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerOnClickLinkThree = async () => {
    showBoy();
    try {
      const data = await getAllProductPageByGender(0, 9, "NIÑ");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-nav-2 navLink">
        <NavLink
          className={activeLady ? "active-link-people" : null}
          onClick={handlerOnClickLinkOne}
        >
          <h3>Dama</h3>
        </NavLink>
        <NavLink
          className={activeGentleman ? "active-link-people" : null}
          onClick={handlerOnClickLinkTwo}
        >
          <h3>Caballero</h3>
        </NavLink>
        <NavLink
          className={activeChild ? "active-link-people" : null}
          onClick={handlerOnClickLinkThree}
        >
          <h3>Niños</h3>
        </NavLink>
      </div>
    </>
  );
};
