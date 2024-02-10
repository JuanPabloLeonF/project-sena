/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DivBodyContainerInformation } from "./DivBodyContainerInformation";
import { DivContainerProductsHistory } from "./DivContainerProductHistory";

import "/src/css/stylePurchaseHistory.css";
import { getAllSalesByIdClient } from "../../services/salesService";

export const PurchaseHistory = ({ initPage, clientOrAdmin }) => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setToatlProducts] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataSales = await getAllSalesByIdClient(clientOrAdmin.id);
        let allProducts = [];
        dataSales.forEach(sale => {
          const cartItems = sale.shoppingCartSalesDto.productEntities;
          allProducts = allProducts.concat(Object.values(cartItems));
        });
        setProducts(allProducts);
        setToatlProducts(allProducts.length);
        console.log("products", allProducts.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


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
            <DivContainerProductsHistory products={products}/>
            <DivBodyContainerInformation totalProducts={totalProducts}/>
          </div>
        </div>
      </div>
    </>
  );
};
