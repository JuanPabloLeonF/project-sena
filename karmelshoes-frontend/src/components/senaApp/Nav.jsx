import "/src/css/styleNav.css";

export const Nav = () => {
  return (
    <>
      <nav className="nav">
        <h1 className="title">KARMELSHOES</h1>
        <div className="container-nav-1">
          <img
            src="/src/assets/imgs/location-dot-solid.svg"
            alt="logo-ubucacion"
          />
          <a href="">Tienda</a>
          <img src="/src/assets/imgs/interrogatorio.svg" alt="" />
          <a href="">¿Quienes somos?</a>
          <img src="/src/assets/imgs/phone-solid.svg" alt="logo-telefono" />
          <a href="">Servicio al cliente</a>
        </div>
        <div className="container-nav-2">
          <h3>Dama</h3>
          <h3>Caballero</h3>
          <h3>Niño</h3>
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
