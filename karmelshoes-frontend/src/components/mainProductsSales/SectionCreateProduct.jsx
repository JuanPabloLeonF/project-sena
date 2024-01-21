/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";
import { productModelCreateFormulary } from "../../models/productModel";
import { SectionCreateColor } from "./SectionCreateColor";
import { createNewProduct } from "../../services/productsService";
import "/src/css/styleSectionCreateProduct.css";
import { useStateCreateProduct } from "../../hooks/useSatetCreateProduct";

export const SectionCreateProduct = ({ showFormularyCreateProduct, updateMainAdmin }) => {

  const {
    state,
    handlerOnsubmit,
    handlerOnChange,
    handlerOnChangeImage,
    handlerSelectGenderOnChange,
    showSectionColor,
    updateProductTypeOptions,
    updateModelOptions,
    handlerResetFormulary,
    dataListColorAndListSize,
    errors,
    messageSuccesing,
    optionsModel,
    optionsProductType,
    dataFormulary,
  } = useStateCreateProduct(updateMainAdmin);

  useEffect(() => {
    updateModelOptions();
    updateProductTypeOptions();
  }, [dataFormulary.gender, dataFormulary.model]);

  const renderSectionColorOrSize = () => {
    if (state.activeSectionColor) {
      return <SectionCreateColor dataListColorAndListSize={dataListColorAndListSize} showSectionColor={showSectionColor} />;
    }
  };

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
  } = dataFormulary;

  const renderMessageErrors = () => {
    if (errors.description) {
      return <h3 style={{ fontSize: "30px" }}>{errors.description}</h3>;
    } else if (errors.color) {
      return <h3 style={{ fontSize: "30px" }}>{errors.color}</h3>;
    } else if (errors.sizes) {
      return <h3 style={{ fontSize: "30px" }}>{errors.sizes}</h3>;
    } else if (messageSuccesing) {
      return <h3 style={{ fontSize: "20px" }}>{messageSuccesing}</h3>;
    } else if (errors.productType) {
      return <h3 style={{ fontSize: "30px" }}>{errors.productType}</h3>;
    } else if (errors.model) {
      return <h3 style={{ fontSize: "30px" }}>{errors.model}</h3>;
    } else if (errors.gender) {
      return <h3 style={{ fontSize: "30px" }}>{errors.gender}</h3>;
    } else {
      return "CREAR PRODUCTO";
    }
  };

  // const handlerShowImg = async () => {
  //   try {
  //     const responseImg = await getImgProductById(10);
  //       console.log("responseImg: ", responseImg);
  //       if (responseImg instanceof ArrayBuffer) {
  //         const blob = new Blob([responseImg], { type: 'image/*' });
  //         const imageUrl = URL.createObjectURL(blob);
  //         setShowImg(imageUrl);
  //       } else {
  //         console.log("No se pudo obtener la imagen");
  //       }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <section className="data-product">
        <div className="data-admin-div">
          <div className="data-admin-head">
            <div className="data-admin-title">{renderMessageErrors()}</div>
            <div className="data-admin-img">
              <img
                onClick={showFormularyCreateProduct}
                src="/src/assets/imgs/circulo-marca-x.png"
                alt=""
              />
            </div>
          </div>
          <form onSubmit={handlerOnsubmit} className="data-product-body">
            <div className="container-form-product">
              <FormInputFormularyData
                label="NOMBRE"
                name="name"
                value={name}
                onChange={handlerOnChange}
                type="text"
                id="name"
                error={errors.name}
              />
              <FormInputFormularyData
                label="MARCA"
                name="mark"
                value={mark}
                onChange={handlerOnChange}
                type="text"
                id="mark"
                error={errors.mark}
              />
              <FormInputFormularyData
                label="CODIGO"
                name="code"
                value={code}
                onChange={handlerOnChange}
                type="text"
                id="code"
                error={errors.code}
              />
              <div className="form-perfil-input">
                <input
                  required
                  value={stock}
                  onChange={handlerOnChange}
                  name={"stock"}
                  className="input"
                  type={"number"}
                  id={"stock"}
                />
                <label htmlFor={"stock"} className="form-label-perfil">
                  <span>CANTIDAD</span>
                </label>
                {errors.stock && (
                  <p className="error-message">{errors.stock}</p>
                )}
              </div>
            </div>
            <div className="container-form-input-body">
              <div className="container-body-1">
                <div className="form-perfil-input">
                  <label htmlFor={"gender"} className="form-label-perfil">
                    <span>GENERO</span>
                  </label>
                  <select
                    required
                    name="gender"
                    value={gender}
                    className="select-1"
                    id="gender"
                    onChange={handlerSelectGenderOnChange}
                  >
                    <option value="">SELECCIONAR</option>
                    <option value="DAMA">DAMA</option>
                    <option value="CABALLERO">CABALLERO</option>
                    <option value="NIÑO">NIÑO</option>
                    <option value="NIÑA">NIÑA</option>
                  </select>
                </div>
                <div className="form-perfil-input">
                  <label htmlFor={"model"} className="form-label-perfil">
                    <span>MODELO</span>
                  </label>
                  <select
                    required
                    name="model"
                    value={model}
                    className="select-1"
                    id="model"
                    onChange={handlerSelectGenderOnChange}
                  >
                    {optionsModel.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-perfil-input">
                  <label htmlFor={"productType"} className="form-label-perfil">
                    <span>CATEGORIA</span>
                  </label>
                  <select
                    required
                    name="productType"
                    value={productType}
                    className="select-1"
                    id="productType"
                    onChange={handlerSelectGenderOnChange}
                  >
                    {optionsProductType.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="container-body-2">
                <div className="container-buttom-sizes">
                  <label htmlFor={"color"} className="form-label-perfil">
                    <span>COLORES</span>
                  </label>
                  <button onClick={showSectionColor} type="button">SELECCIONAR</button>
                </div>
                <div className="container-buttom-sizes">
                  <label htmlFor={"sizes"} className="form-label-perfil">
                    <span>TALLAS</span>
                  </label>
                  <button onClick={showSectionColor} type="button">SELECCIONAR</button>
                </div>
                <div className="container-img">
                  <label htmlFor="img" className="form-label-perfil">
                    <span>IMAGEN</span>
                  </label>
                  <div className="custom-file-input">
                    <input
                      required
                      name="img"
                      onChange={handlerOnChangeImage}
                      type="file"
                      id="img"
                      className="file"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
              <div className="container-body-3">
                <div className="container-price">
                  <FormInputFormularyData
                    label="PRECIO $"
                    name="price"
                    value={price}
                    onChange={handlerOnChange}
                    type="number"
                    id="price"
                    error={errors.price}
                  />
                </div>
                <div className="container-title-description">
                  <label htmlFor="description" className="form-label-perfil">
                    <span>DESCRIPCION:</span>
                  </label>
                </div>
                <textarea
                  required
                  onChange={handlerOnChange}
                  className="text-area"
                  name="description"
                  value={description}
                ></textarea>
              </div>
              <div className="container-body-buttom">
                <div className="buttom-delete">
                  <input
                    onClick={handlerResetFormulary}
                    type="button"
                    value="LIMPIAR"
                  />
                </div>
                <div className="buttom-create">
                  <input type="submit" value={"GUARDAR"} />
                </div>
              </div>
            </div>
          </form>
        </div>
        {renderSectionColorOrSize()}
      </section>
    </>
  );
};
