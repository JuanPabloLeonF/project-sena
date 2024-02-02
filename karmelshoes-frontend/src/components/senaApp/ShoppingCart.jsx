/* eslint-disable react/prop-types */
import { useState } from "react";
import { ItemShoppingCart } from "./ItemShoppingCart";
import "/src/css/styleShoppingCart.css";

export const ShoppingCart = ({ showShoppingCart, arrayProductsShoppingCart }) => {

  const [priceTotalShoppingCart, setPriceTotalShoppingCart] = useState(0);

  return (
    <>
      <div className="div-showShoppingCart">
        <div className="div-ShoopingCart">
          <div className="div-header">
            <h2>Carrito De Compras</h2>
            <img
              className="img"
              onClick={showShoppingCart}
              src="/src/assets/imgs/circulo-marca-x.png"
              alt=""
            />
          </div>
          <div className="div-body">
            {arrayProductsShoppingCart.map((product, index) => (
              <ItemShoppingCart key={index} product={product} />
            ))}
          </div>
          <div className="div-footer">
            <div>
              <h2>Total:</h2>
              <h2>{priceTotalShoppingCart}</h2>
            </div>
            <button>Realizar Compra</button>
          </div>
        </div>
      </div>
    </>
  );
};
