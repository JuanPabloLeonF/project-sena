import { productModel } from "../../models/productModel";
import "/src/css/styleSectionDataProduct.css";
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";
import ReactSelect from "react-select";

export const SectionDataProduct = ({ showDataProduct }) => {
  const handlerOnChange = () => null;
  const erroState = {};
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

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      outline: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "white" : "black",
      color: state.isSelected ? "black" : "white",
      "&:hover": {
        background: "white",
        color: "black",
      },
    }),
  };

  return (
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
              {erroState.code && (
                <p className="error-message">{erroState.code}</p>
              )}
            </div>
          </div>
          <div className="container-form-input-body">
            <div className="container-body-1">
              <FormInputFormularyData
                label="PRECIO $"
                name="price"
                value={price}
                onChange={handlerOnChange}
                type="text"
                id="price"
                error={erroState.price}
              />
              <div className="form-perfil-input">
                <label htmlFor={"gender"} className="form-label-perfil">
                  <span>GENERO</span>
                </label>
                <ReactSelect
                  classNamePrefix="react-select"
                  className={"select-1"}
                  options={[
                    { value: "DAMA", label: "DAMA" },
                    { value: "CABALLERO", label: "CABALLERO" },
                    { value: "NIÑO", label: "NIÑO" },
                    { value: "NIÑA", label: "NIÑA" },
                  ]}
                />
              </div>

              <div className="form-perfil-input">
                <label htmlFor={"model"} className="form-label-perfil">
                  <span>MODELO</span>
                </label>
                <select className="select-1" id="model">
                  <option value="SANDALIAS">SANDALIAS</option>
                  <option value="TENIS">TENIS</option>
                  <option value="ZAPATOS">ZAPATOS</option>
                  <option value="TACONES">TACONES</option>
                </select>
              </div>
            </div>
          </div>
          <div className="message-admin">
            {/* ... (mensajes de error u otros) */}
          </div>
        </form>
      </div>
    </section>
  );
};
