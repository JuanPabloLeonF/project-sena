/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "/src/css/styleSectionAdmin.css";
import { getAllProductPageByName } from "../../services/productsService";

export const SectionAdmin = ({
  showRegistrer,
  activeMainProductsSales,
  showFormularyCreateProduct,
  currentPageProduct,
  currentPage
}) => {
  const [optionSelect, setOptionSelect] = useState([]);
  const [dataFormulary, setDataFormulary] = useState({
    selectText: "",
    inputText: "",
  })

  const { selectText, inputText } = dataFormulary;

  useEffect(() => {
    optionsRender();
  }, [activeMainProductsSales])

  const optionsRender = () => {
    console.log(activeMainProductsSales);
    if (activeMainProductsSales) {
      setOptionSelect([
        { value: "", label: "SELECCIONA" },
        { value: "NOMBRE", label: "NOMBRE" },
        { value: "MARCA", label: "MARCA" },
        { value: "MODELO", label: "MODELO" },
        { value: "GENERO", label: "GENERO" },
        { value: "PRECIO", label: "PRECIO" },
        { value: "CATEGORIA", label: "CATEGORIA" },
        { value: "CODIGO", label: "CODIGO" },
        { value: "ELIMINADO", label: "ELIMINADO" },
      ]);
    } else {
      setOptionSelect([
        { value: "", label: "SELECCIONA" },
        { value: "active", label: "Activos" },
        { value: "inactive", label: "Inactivos" },
        { value: "deleted", label: "Eliminados" },
      ]);
    }
  }

  const handlerOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulary({
      ...dataFormulary,
      [name]: value,
    })
  }

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    console.log("dataFormulary: ", dataFormulary);
    const data = getAllDataTableProductsBySelect(dataFormulary.inputText);
    setDataFormulary({
      selectText: "",
      inputText: "",
    })
  }

  const getAllDataTableProductsBySelect = async (valueInput) => {
      const data = await valueInputFuntion(valueInput);
      console.log("data: ", data);
  }

  const valueInputFuntion = async (valueInput) => {
    try {
      switch (valueInput) {
        case "NOMBRE": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
        case "MARCA": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
        case "MODELO": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
        case "GENERO": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
        case "PRECIO": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
        case "CATEGORIA": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
        case "CODIGO": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
        case "ELIMINADO": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
        default: {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, valueInput);
          return data;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="section-admin">
        <form onSubmit={handlerOnSubmit} className="div-search-product">
          <div className="select-search">
            <select
              style={{ width: "150px", height: "25px", borderRadius: "3px" }}
              required
              name="selectText"
              value={selectText}
              className="select-1"
              id="selectText"
              onChange={handlerOnChange}
            >
              {optionSelect.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="input-search-configuration">
            <div className="input-search">
              <input
                type="text"
                value={inputText}
                name="inputText"
                placeholder={selectText ? selectText : "BUSCAR PRODUCTO"}
                className="input-1"
                id="inputText"
                required={selectText}
                onChange={handlerOnChange} />
              <button type="submit">
                <img src="/src/assets/imgs/busqueda.svg" alt="Buscar" />
              </button>
            </div>
          </div>
        </form>
        {activeMainProductsSales ? (
          <h2 className="h2-admin-section">PRODUCTOS</h2>
        ) : (
          <h2 className="h2-admin-section" style={{ paddingLeft: "40px" }}>ADMINSITRADORES</h2>
        )}
        <div className="img-create-admin">
          {activeMainProductsSales ? (
            <img
              style={{ width: "35px" }}
              onClick={showFormularyCreateProduct}
              src="/src/assets/imgs/create-zapato.png"
              alt=""
            />
          ) : (
            <img
              onClick={showRegistrer}
              src="/src/assets/imgs/agregar-usuario.png"
              alt=""
            />
          )}
        </div>
      </section>
    </>
  );
};
