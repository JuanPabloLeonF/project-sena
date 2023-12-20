import { useEffect, useState } from "react";
import { DivBodyContainerInformation } from "./DivBodyContainerInformation";
import { DivContainerProductsHistory } from "./DivContainerProductHistory";
import {getAllProduct} from "/src/services/productsService.js";

import "/src/css/stylePurchaseHistory.css";

export const PurchaseHistory = ({ initPage }) => {
  const [products, setProducts] = useState([]);

  useEffect (()=> {
    const fetchData = async () => {
      try {
        const data = await getAllProduct();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])

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
            <DivContainerProductsHistory products={products}></DivContainerProductsHistory>
            <DivBodyContainerInformation></DivBodyContainerInformation>
          </div>
        </div>
      </div>
    </>
  );
};
