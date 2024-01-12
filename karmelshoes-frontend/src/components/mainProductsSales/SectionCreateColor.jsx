import { useEffect, useState } from "react";
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";
import { initialDataFormularyColorAndSize, showDataColorsAndSizes } from "../../models/initialStateSectionCreateColor";

export const SectionCreateColor = ({ showSectionColor }) => {
  const [dataFormuaryMain, setDataFormularyMain] = useState(initialDataFormularyColorAndSize);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [showList, setShowList] = useState(showDataColorsAndSizes);

  const handlerOnChangeName = (event) => {
    const { name, value } = event.target;
    if (name === "color") {
      const nameValue = value.toUpperCase();
      setColor(nameValue);
    }
  };

  const handlerOnChangeSize = (event) => {
    const { name, value } = event.target;
    if (name === "size") {
      setSize(value);
    }
  };

  useEffect(() => {
    handlerListColorsAndSizes();
  }, []);

  const handlerListColorsAndSizes = () => {
    const data = {
      colorList: [
        { name: "ROJO" },
        { name: "BLANCO" },
        { name: "AZUL" },
        { name: "VERDE" }
      ],
      sizesList: [
        { size: 12 },
        { size: 22 },
        { size: 32 },
      ]
    }

    setShowList(data)
  }

  const handlerSaveSize = () => {
    console.log("size a guardar:", size);
    setSize("");
  };

  const handlerDeleteSize = () => {
    console.log("size a eliminar:", size);
    setSize("");
  };

  const handlerSaveColor = () => {
    console.log("color a guardar:", color);
    setColor("");
  };

  const handlerDeleteColor = () => {
    console.log("color a eliminar:", color);
    setColor("");
  };

  const handlerOnChangeFormularyName = (event) => {
    const { name, type, checked } = event.target;

    setDataFormularyMain((prevDataFormulary) => {
      if (type === "checkbox") {
        return {
          ...prevDataFormulary,
          colors: checked
            ? [...prevDataFormulary.colors, name]
            : prevDataFormulary.colors.filter((color) => color !== name),
        };
      }
    });
  };

  const handlerOnChangeFormularySize = (event) => {
    const { name, type, checked } = event.target;
  
    // Verificar si el nombre es un número válido
    const sizeValue = parseInt(name);
  
    if (!isNaN(sizeValue) && type === "checkbox") {
      setDataFormularyMain((prevDataFormulary) => {
        console.log(sizeValue)
        return {
          ...prevDataFormulary,
          sizes: checked
            ? [...prevDataFormulary.sizes, sizeValue]
            : prevDataFormulary.sizes.filter((size) => size !== sizeValue),
        };
      });
    } else {
      // Manejar el caso cuando name no es un número o el tipo no es checkbox
      console.error(`Error: ${name} no es un número o el tipo no es checkbox.`);
    }
  };
  




  const handlerOnsubmit = (event) => {
    event.preventDefault();
    console.log("data formulario color: ", dataFormuaryMain);
  };

  const erroState = {};

  const { colors, sizes } = dataFormuaryMain;

  return (
    <>
      <div className="section-color">
        <form onSubmit={handlerOnsubmit} className="section-color-body">
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
            <div className="section-color-div">
              <div className="section-text-color">
                <FormInputFormularyData
                  label="COLOR"
                  name="color"
                  value={color}
                  onChange={handlerOnChangeName}
                  type="text"
                  id="color"
                  error={erroState.color}
                />
                <div className="buttom-create">
                  <input className="section-buttoms-color" type="button" value={"GUARDAR"} onClick={handlerSaveColor} />
                  <input type="button" value={"ELIMINAR"} onClick={handlerDeleteColor} />
                </div>
              </div>
              <div className="section-select-checkbox">
                {showList.colorList.map((colorItem) => (
                  <div className="checkbox" key={colorItem.name}>
                    <input
                      type="checkbox"
                      name={colorItem.name}
                      onChange={handlerOnChangeFormularyName}
                      checked={colors.includes(colorItem.name)}
                    />
                    {colorItem.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="head-section-div">
              <h2>TALLAS</h2>
            </div>
            <div className="section-color-div">
              <div className="section-text-color">
                <FormInputFormularyData
                  label="TALLA"
                  name="size"
                  value={size}
                  onChange={handlerOnChangeSize}
                  type="number"
                  id="size"
                  error={erroState.size}
                />
                <div className="buttom-create">
                  <input className="section-buttoms-color" type="button" value={"GUARDAR"} onClick={handlerSaveSize} />
                  <input type="button" value={"ELIMINAR"} onClick={handlerDeleteSize} />
                </div>
              </div>
              <div className="section-select-checkbox">
                {showList.sizesList.map((sizeItem) => (
                  <div className="checkbox" key={sizeItem.size}>
                    <input
                      type="checkbox"
                      name={sizeItem.size}
                      onChange={handlerOnChangeFormularySize}
                      checked={sizes.includes(sizeItem.size)}
                    />
                    {sizeItem.size}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-section-div">
            <div className="buttom-create">
              <input type="submit" value={"GUARDAR"} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
