import { useEffect, useState } from "react";
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";
import { productModelCreateFormulary } from "../../models/productModel";
import "/src/css/styleSectionCreateProduct.css";
import { SectionCreateColor } from "./SectionCreateColor";
import { createNewProduct } from "../../services/productsService";

export const SectionCreateProduct = ({ showFormularyCreateProduct, updateMainAdmin }) => {
  const [dataFormuary, setDataFormulary] = useState(
    productModelCreateFormulary
  );

  const [activeSectionColor, sectActiveSectionColor] = useState(false);
  const [erroState, setErroState] = useState({});
  const [messageSuccesing, setMessageSuccesing] = useState("");
  const [optionsModel, setOptionsModel] = useState([]);
  const [optionsProductType, setOptionsProductType] = useState([]);

  const handlerOnChangeImage = (event) => {
    console.log(event.target.files[0]);
    setDataFormulary((prevDataFormulary) => ({
      ...prevDataFormulary,
      img: event.target.files[0],
    }));
  }

  useEffect(() => {
    const updateModelOptions = () => {
      if (dataFormuary.gender === "DAMA" || dataFormuary.gender === "NIÑA") {
        setOptionsModel([
          { value: "", label: "SELECCIONA" },
          { value: "ZAPATOS", label: "ZAPATOS" },
          { value: "TENIS", label: "TENIS" },
          { value: "SANDALIAS", label: "SANDALIAS" },
          { value: "TACONES", label: "TACONES" },
        ]);
      } else if (
        dataFormuary.gender === "CABALLERO" ||
        dataFormuary.gender === "NIÑO"
      ) {
        setOptionsModel([
          { value: "", label: "SELECCIONA" },
          { value: "ZAPATOS", label: "ZAPATOS" },
          { value: "TENIS", label: "TENIS" },
          { value: "SANDALIAS", label: "SANDALIAS" },
        ]);
      } else {
        setOptionsModel([
          { value: "", label: "SELECCIONA" }
        ]);
      }
    };

    const updateProductTypeOptions = () => {
      if (dataFormuary.model === "ZAPATOS") {
        setOptionsProductType([
          { value: "", label: "SELECCIONA" },
          { value: "BOTAS", label: "BOTAS" },
          { value: "BOTINES", label: "BOTINES" },
        ]);
      } else if (dataFormuary.model === "SANDALIAS") {
        setOptionsProductType([
          { value: "", label: "SELECCIONA" },
          { value: "PLANAS", label: "PLANAS" },
          { value: "PLATAFORMAS", label: "PLATAFORMAS" },
          { value: "MEDIANAS", label: "MEDIANAS" },
        ]);
      } else if (dataFormuary.model === "TENIS") {
        setOptionsProductType([
          { value: "", label: "SELECCIONA" },
          { value: "SNEAKERS", label: "SNEAKERS" },
          { value: "PLATAFORMAS", label: "PLATAFORMAS" },
          { value: "SIN CORDONES", label: "SIN CORDONES" },
          { value: "DEPORTIVOS", label: "DEPORTIVOS" },
        ]);
      } else if (
        (dataFormuary.model === "TACONES" &&
          (dataFormuary.gender === "DAMA" || dataFormuary.gender === "NIÑA"))
      ) {
        setOptionsProductType([
          { value: "", label: "SELECCIONA" },
          { value: "ALTOS", label: "ALTOS" },
          { value: "BAJOS", label: "BAJOS" },
          { value: "MEDIOS", label: "MEDIOS" },
        ]);
      } else {
        setOptionsProductType([{ value: "", label: "SELECCIONA" }]);
      }
    };


    updateModelOptions();
    updateProductTypeOptions();
  }, [dataFormuary.gender, dataFormuary.model]);

  const showSectionColor = () => {
    sectActiveSectionColor(!activeSectionColor);
  };

  const renderSectionColorOrSize = () => {
    if (activeSectionColor) {
      return <SectionCreateColor dataListColorAndListSize={dataListColorAndListSize} showSectionColor={showSectionColor} />;
    }
  };

  const validateProductFields = (product) => {
    const errors = {};

    if (product.name.length < 2 || product.name.length > 200) {
      errors.name = "El nombre debe tener entre 2 y 200 caracteres";
    }

    if (product.description.length < 8) {
      errors.description = "La descripción debe tener al menos 8 caracteres";
    }

    if (product.price <= 0) {
      errors.price = "El precio debe ser mayor a 0.00";
    }

    if (product.stock <= 0) {
      errors.stock = "El valor de stock debe ser mayor a 0.00";
    }

    if (product.productType.length < 4 || product.productType.length > 200) {
      errors.productType =
        "El tipo de producto debe tener entre 4 y 200 caracteres";
    }

    if (product.mark.length < 4 || product.mark.length > 200) {
      errors.mark = "La marca debe tener entre 4 y 200 caracteres";
    }

    if (product.model.length < 4 || product.model.length > 200) {
      errors.model = "El modelo no puede estar vacio";
    }

    if (product.gender.length < 4 || product.gender.length > 200) {
      errors.gender = "El genero no puede estar vacio";
    }

    if (product.productType.length < 4 || product.productType.length > 200) {
      errors.productType = "La categoria no puede estar vacia";
    }

    if (product.sizes.length === 0) {
      errors.sizes = "Las tallas no pueden estar vacios";
    }

    if (product.color.length === 0) {
      errors.color = "Los colores no pueden estar vacios";
    }

    if (product.img.length === 0) {
      errors.img = "La imagen es requerida";
    }

    if (product.code.length < 5) {
      errors.code = "El campo code debe tener al menos 5 caracteres";
    }

    setErroState(errors);
    return Object.keys(errors).length === 0;
  };

  const handlerOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulary((prevDataFormulary) => ({
      ...prevDataFormulary,
      [name]: value,
    }));
  };

  const dataListColorAndListSize = (data) => {
    setDataFormulary((prevDataFormulary) => ({
      ...prevDataFormulary,
      color: data.colors,
      sizes: data.sizes,
    }));
  }

  const handlerOnsubmit = async (event) => {
    event.preventDefault();
    if (validateProductFields(dataFormuary)) {
      try {
        setMessageSuccesing("Se Creo Correctamente El Producto");
        await createNewProduct(dataFormuary, dataFormuary.img);
        updateMainAdmin();
        setDataFormulary(productModelCreateFormulary);
      } catch (error) {
        console.log("errors: ", error);
      }
    }
  };

  const handlerResetFormulary = () => {
    setDataFormulary(productModelCreateFormulary);
  };

  const handlerSelectGenderOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulary((prevDataFormulary) => ({
      ...prevDataFormulary,
      [name]: value,
    }));
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
  } = dataFormuary;

  const renderMessageErrors = () => {
    if (erroState.description) {
      return <h3 style={{ fontSize: "30px" }}>{erroState.description}</h3>;
    } else if (erroState.color) {
      return <h3 style={{ fontSize: "30px" }}>{erroState.color}</h3>;
    } else if (erroState.sizes) {
      return <h3 style={{ fontSize: "30px" }}>{erroState.sizes}</h3>;
    } else if (messageSuccesing) {
      return <h3 style={{ fontSize: "30px" }}>{messageSuccesing}</h3>;
    } else if (erroState.productType) {
      return <h3 style={{ fontSize: "30px" }}>{erroState.productType}</h3>;
    } else if (erroState.model) {
      return <h3 style={{ fontSize: "30px" }}>{erroState.model}</h3>;
    } else if (erroState.gender) {
      return <h3 style={{ fontSize: "30px" }}>{erroState.gender}</h3>;
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
                error={erroState.name}
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
                label="CODIGO"
                name="code"
                value={code}
                onChange={handlerOnChange}
                type="text"
                id="code"
                error={erroState.code}
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
                {erroState.stock && (
                  <p className="error-message">{erroState.stock}</p>
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
                      //value={img}
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
                    error={erroState.price}
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
