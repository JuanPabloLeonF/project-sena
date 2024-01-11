import { useState } from "react";
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";

export const SectionCreateColor = ({ showSectionColor }) => {
  const [dataFormuaryColor, setDataFormularyColor] = useState({ name: "" });
  const handlerOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormularyColor((prevDataFormulary) => ({
      ...prevDataFormulary,
      [name]: value,
    }));
  };

  const handlerOnsubmit = (event) => {
    event.preventDefault();
    console.log("data formulario color: ", dataFormuaryColor);
  };

  const erroState = {};

  return (
    <>
      <div className="section-color">
        <div className="section-color-body">
          <div className="section-color-img">
            <img
              onClick={showSectionColor}
              src="/src/assets/imgs/flecha-circulo-izquierda.png"
            />
          </div>
          <div className="section-color-div-body">
            <div className="head-section-div">
              <h2>COLORES</h2>
            </div>
            <form className="section-color-div">
              <FormInputFormularyData
                label="NOMBRE"
                name="name"
                value={name}
                onChange={handlerOnChange}
                type="text"
                id="name"
                error={erroState.name}
              />
            </form>
            <div className="head-section-div">
              <h2>TALLAS</h2>
            </div>
            <div className="section-size-div">cuerpo talla</div>
          </div>
          <div className="footer-section-div">
            <div className="buttom-create">
              <input type="submit" value={"GUARDAR"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
