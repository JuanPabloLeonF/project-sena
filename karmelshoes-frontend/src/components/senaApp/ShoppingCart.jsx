import { ItemShoppingCart } from "./ItemShoppingCart";
import "/src/css/styleShoppingCart.css";

export const ShoppingCart = ({ showShoppingCart }) => {
  return (
    <>
      <div className="div-showShoppingCart">
        <div className="div-ShoopingCart">
          <div className="div-header">
            <h2>Carrito De Compras</h2>
            <img
              onClick={showShoppingCart}
              src="/src/assets/imgs/circulo-marca-x.png"
              alt=""
            />
          </div>
          <div className="div-body">
            <ItemShoppingCart></ItemShoppingCart>
            <ItemShoppingCart></ItemShoppingCart>
            <ItemShoppingCart></ItemShoppingCart>
            <ItemShoppingCart></ItemShoppingCart>
            <ItemShoppingCart></ItemShoppingCart>
          </div>
          <div className="div-footer">
            <div>
              <h2>Total:</h2>
              <h2>150.000$</h2>
            </div>
            <button>Realizar Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};
