/* eslint-disable react/prop-types */
import { productModel } from "../../models/productModel";
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";

export const DivContainerInputFormularyUpdateProduct = ({
  erroState,
  productModelId,
  handlerOnChange,
}) => {
  const {
    name,
    description,
    price,
    stock,
    productType,
    mark,
    model,
    sizes,
    color,
    gender,
    img,
    status,
    code,
  } = productModel;
  return (
    <>
      <div className="container-form-product">
        <FormInputFormularyData
          label="NOMBRE"
          name="name"
          value={name}
          onChange={handlerOnChange}
          type="text"
          id="name"
          error={erroState.name}
        />
        <FormInputFormularyData
          label="DESCRIPCION"
          name="description"
          value={description}
          onChange={handlerOnChange}
          type="text"
          id="description"
          error={erroState.description}
        />
        <FormInputFormularyData
          label="PRECIO"
          name="price"
          value={price}
          onChange={handlerOnChange}
          type="text"
          id="price"
          error={erroState.price}
        />
        <FormInputFormularyData
          label="CANTIDAD DISPONIBLE"
          name="stock"
          value={stock}
          onChange={handlerOnChange}
          type="stock"
          id="stock"
          error={erroState.stock}
        />
      </div>
      <div className="container-form-product">
      <FormInputFormularyData
          label="CATEGORIA"
          name="productType"
          value={productType}
          onChange={handlerOnChange}
          type="text"
          id="productType"
          error={erroState.productType}
        />
        <FormInputFormularyData
          label="MARCA"
          name="mark"
          value={mark}
          onChange={handlerOnChange}
          type="text"
          id="mark"
          error={erroState.mark}
        />
        <FormInputFormularyData
          label="MODELO"
          name="model"
          value={model}
          onChange={handlerOnChange}
          type="text"
          id="model"
          error={erroState.model}
        />
        <FormInputFormularyData
          label="TALLAS"
          name="sizes"
          value={sizes}
          onChange={handlerOnChange}
          type="text"
          id="sizes"
          error={erroState.sizes}
        />
      </div>
      <div className="container-form-product">
      <FormInputFormularyData
          label="COLORES"
          name="color"
          value={color}
          onChange={handlerOnChange}
          type="text"
          id="color"
          error={erroState.color}
        />
        <FormInputFormularyData
          label="CODIGO"
          name="code"
          value={code}
          onChange={handlerOnChange}
          type="text"
          id="code"
          error={erroState.code}
        />
        
      </div>
    </>
  );
};
