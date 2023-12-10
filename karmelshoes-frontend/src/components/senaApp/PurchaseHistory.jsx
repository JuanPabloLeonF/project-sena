import { useRef } from "react";
import "/src/css/stylePurchaseHistory.css";

export const PurchaseHistory = ({ initPage }) => {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Ajusta el valor de desplazamiento según tus necesidades
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Ajusta el valor de desplazamiento según tus necesidades
    }
  };

  return (
    <>
      <div className="purchase-history">
        <div className="container">
          <div className="container-header">
            <h2>Historial De Compras</h2>
            <img
              onClick={initPage}
              src="/src/assets/imgs/circulo-marca-x.png"
              alt=""
            />
          </div>
          <div className="container-body">
            <div className="products-title">
              <h3>Tus Productos</h3>
            </div>
            <div className="img-left">
              <img
                onClick={handleScrollLeft}
                src="/src/assets/imgs/flecha-circulo-izquierda.png"
                alt=""
              />
            </div>
            <div className="img-right">
              <img
                onClick={handleScrollRight}
                src="/src/assets/imgs/flecha-circulo-izquierda.png"
                alt=""
              />
            </div>
            <div className="container-products" ref={containerRef}>
              <div className="container-products-inner">
                <div className="container-the-product">Tu producto 1</div>
                <div className="container-the-product">Tu producto 2</div>
                <div className="container-the-product">Tu producto 3</div>
                <div className="container-the-product">Tu producto 4</div>
                <div className="container-the-product">Tu producto 5</div>
                <div className="container-the-product">Tu producto 6</div>
                <div className="container-the-product">Tu producto 7</div>
                <div className="container-the-product">Tu producto 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
