import { DivContainerInputFormularyUpdateProduct } from "./DivContainerInputFormularyUpdateProduct";

import "/src/css/styleSectionDataProduct.css";
export const SectionDataProduct = ({ showDataProduct }) => {
  const productModelId = {};
  const handlerOnChange = () => null;
  const erroState = {};
  return (
    <>
      <section className="data-product">
        <div className="data-admin-div">
          <div className="data-admin-head">
            <div className="data-admin-title">DATOS</div>
            <div className="data-admin-img">
              <img
                onClick={showDataProduct}
                src="/src/assets/imgs/circulo-marca-x.png"
                alt=""
              />
            </div>
          </div>
          <form className="data-product-body">
            <DivContainerInputFormularyUpdateProduct
              erroState={erroState}
              productModelId={productModelId}
              handlerOnChange={handlerOnChange}
            />
            <div className="message-admin">
              <div>dfghj</div>
            </div>
            <div>dfghj</div>
          </form>
        </div>
      </section>
    </>
  );
};
