import { Link } from "react-router-dom";

export const ContainerNavThree = () => {
  return (
    <>
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
        <Link to={"/"} className="enlace">
          <img src="/src/assets/imgs/user-solid.svg" alt="" />
        </Link>
      </div>
    </>
  );
};
