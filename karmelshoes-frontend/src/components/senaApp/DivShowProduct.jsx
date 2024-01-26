/* eslint-disable react/prop-types */
import { DivProduct } from "./DivProduct";
import "/src/css/styleDivShowProduct.css";

export const DivShowProduct = ({ dataTableProductAvailable }) => {
  return (
    <>
      <div className="show-product">
        {dataTableProductAvailable.map((product, index) => (
          <DivProduct key={index} product={product} />
        ))}
      </div>
    </>
  );
};
