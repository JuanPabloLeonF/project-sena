import { DivProduct } from "./DivProduct";
import "/src/css/styleDivShowProduct.css";

export const DivShowProduct = () => {
  return (
    <>
      <div className="show-product">
        <DivProduct></DivProduct>
        <DivProduct></DivProduct>
        <DivProduct></DivProduct>
      </div>
    </>
  );
};
