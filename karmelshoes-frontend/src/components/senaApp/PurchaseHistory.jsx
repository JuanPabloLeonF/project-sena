import "/src/css/stylePurchaseHistory.css";
import { DivBodyContainerInformation } from "./DivBodyContainerInformation";
import { DivContainerProductsHistory } from "./DivContainerProductHistory";

export const PurchaseHistory = ({ initPage }) => {

  return (
    <>
      <div className="purchase-history">
        <div className="container-sub-history">
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
            <DivContainerProductsHistory></DivContainerProductsHistory>
            <DivBodyContainerInformation></DivBodyContainerInformation>
          </div>
        </div>
      </div>
    </>
  );
};
