/* eslint-disable react/prop-types */
import { DivProduct } from "./DivProduct";
import "/src/css/styleDivShowProduct.css";

export const DivShowProduct = ({ dataTableProductAvailable, showDetailsProduct, setDataDetailsProduct }) => {
  return (
    <>
      <div className="show-product">
        <div className="show-products-section">
          {dataTableProductAvailable.map((product, index) => (
            <DivProduct showDetailsProduct={showDetailsProduct} key={index} product={product} setDataDetailsProduct={setDataDetailsProduct} />
          ))}
        </div>
        <div className="buttom-concurrent">
          <div className="div-product-img-cuncurrent">
            <img src="/src/assets/imgs/flecha-circulo-izquierda.png" alt="regresar" />
          </div>
          <div className="div-product-img-cuncurrent">
            <img src="/src/assets/imgs/flecha-circulo-izquierda.png" alt="seguir" />
          </div>
        </div>
      </div>
    </>
  );
};
