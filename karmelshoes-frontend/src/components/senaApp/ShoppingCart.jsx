/* eslint-disable react/prop-types */
import { ItemShoppingCart } from "./ItemShoppingCart";
import "/src/css/styleShoppingCart.css";

export const ShoppingCart = ({ showShoppingCart, modelProductsShoppingCart, removeProductShoppingCart, showMainPayment }) => {


  const renderListProductsShoppingCart = () => {
    if (modelProductsShoppingCart.productEntitiesShoppingCartDto) {
      const uniqueProductIds = new Set();
      const uniqueProducts = Object.values(modelProductsShoppingCart.productEntitiesShoppingCartDto).filter(product => {
        if (!uniqueProductIds.has(product.id)) {
          uniqueProductIds.add(product.id);
          return true;
        }
        return false;
      });

      if (uniqueProducts.length === 0) {
        return (
          <div className="div-body">
            <div className="container-null-body">
              <img src="/src/assets/imgs/fondo-carro-compras -sin-fondo.png" alt="imagen fondo carrito compras" />
            </div>
          </div>
        );
      }

      return (
        <div className="div-body" >
          {
            uniqueProducts.map((product, index) => (
              <ItemShoppingCart
                removeProductShoppingCart={removeProductShoppingCart}
                key={index}
                product={product}
                quantity={getProductQuantity(product.id, modelProductsShoppingCart.productEntitiesShoppingCartDto)}
                modelProductsShoppingCart={modelProductsShoppingCart}
              />
            ))
          }
        </div>
      )
    } else {
      return (
        <div className="div-body">
          <div className="container-null-body">
            <img src="/src/assets/imgs/fondo-carro-compras -sin-fondo.png" alt="imagen fondo carrito compras" />
          </div>
        </div>
      );
    }
  }

  const getProductQuantity = (productId, productEntities) => {
    return productEntities.filter(product => product.id === productId).length;
  };

  return (
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
        {renderListProductsShoppingCart()}
        <div className="div-footer">
          <div>
            <h2>Total:</h2>
            <h2>{modelProductsShoppingCart.totalPriceShoppingCartDto}</h2>
          </div>
          <button type="button" onClick={showMainPayment}>Realizar Compra</button>
        </div>
      </div>
    </div>
  );
};
