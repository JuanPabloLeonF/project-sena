import { Link, NavLink } from "react-router-dom";
import "/src/css/styleNav.css";

export const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link to={"/"} className="link">
          <h1 className="title">KARMELSHOES</h1>
        </Link>
        <div className="container-nav-1">
          <img
            src="/src/assets/imgs/location-dot-solid.svg"
            alt="logo-ubucacion"
          />
          <a href="">Tienda</a>
          <img src="/src/assets/imgs/interrogatorio.svg" alt="" />
          <NavLink className={({isActive}) => isActive ? "active-link": null} to={"/whoWeAre"}>¿Quienes somos?</NavLink>
          <img src="/src/assets/imgs/phone-solid.svg" alt="logo-telefono" />
          <a href="">Servicio al cliente</a>
        </div>
        <div className="container-nav-2 navLink">
          <NavLink className={({isActive}) => isActive ? "active-link-people": null} to={"/lady"}>
          <h3>Dama</h3>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link-people": null} to={"/gentleman"}>
          <h3>Caballero</h3>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link-people": null} to={"/child "}>
          <h3>Niño</h3>
          </NavLink>
        </div>
        <div className="container-nav-3">
          <div className="input-search">
            <input type="text" name="" id="" placeholder="Buscar Producto" />
            <button>
              <img src="/src/assets/imgs/busqueda.svg" alt="" />
            </button>
          </div>
          <a href="" className="enlace">
            <img src="/src/assets/imgs/receipt-solid.svg" alt="" />
          </a>
          <a href="" className="enlace">
            <img src="/src/assets/imgs/user-solid.svg" alt="" />
          </a>
        </div>
      </nav>
    </>
  );
};
