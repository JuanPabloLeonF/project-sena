/* eslint-disable react/prop-types */
import { DivProduct } from "./DivProduct";
import "/src/css/styleDivShowProduct.css";

export const DivShowProduct = ({ dataTableProductAvailable, showDetailsProduct, setDataDetailsProduct }) => {
  return (
    <>
      <div className="show-product">
        {dataTableProductAvailable.map((product, index) => (
          <DivProduct showDetailsProduct={showDetailsProduct} key={index} product={product} setDataDetailsProduct={setDataDetailsProduct} />
        ))}
      </div>
    </>
  );
};
