/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "/src/css/styleSectionAdmin.css";
import { getAllProductPageByCode, getAllProductPageByGender, getAllProductPageByMark, getAllProductPageByModel, getAllProductPageByName, getAllProductPageByPrice, getAllProductPageByProductType, getAllProductPageByStatusFalse, getAllProductPages } from "../../services/productsService";
import { getAllClientAdmin, getAllClientAdminByAddress, getAllClientAdminByEmail, getAllClientAdminByIdentificaction, getAllClientAdminByName, getAllClientAdminByPhone, getAllClientAdminByStatus } from "../../services/clientServices";

export const SectionAdmin = ({
  showRegistrer,
  activeMainProductsSales,
  showFormularyCreateProduct,
  currentPageProduct,
  currentPage,
  dataTableAdmin,
  dataTableProduct,
}) => {
  const [optionSelect, setOptionSelect] = useState([]);
  const [dataFormulary, setDataFormulary] = useState({
    selectText: "",
    inputText: "",
  })

  const { selectText, inputText } = dataFormulary;

  useEffect(() => {
    optionsRender();
    setDataFormulary({
      selectText: "",
      inputText: "",
    })
  }, [activeMainProductsSales])

  const optionsRender = () => {
    console.log(activeMainProductsSales);
    if (activeMainProductsSales) {
      setOptionSelect([
        { value: "", label: "SELECCIONA" },
        { value: "TODOS", label: "TODOS" },
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
        { value: "TODOS", label: "TODOS" },
        { value: "NOMBRE", label: "NOMBRE" },
        { value: "CORREO", label: "CORREO" },
        { value: "TELEFONO", label: "TELEFONO" },
        { value: "DIRECCION", label: "DIRECCION" },
        { value: "ELIMINADO", label: "ELIMINADO" },
        { value: "IDENTIFICACION", label: "IDENTIFICACION" },
      ]);
    }
  }

  const handlerOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "selectText" && value === "TODOS") {
      setDataFormulary({
        ...dataFormulary,
        selectText: "TODOS",
        inputText: "TODOS"
      })
      return;
    }
    setDataFormulary({
      ...dataFormulary,
      [name]: value,
    })
  }

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    console.log("dataFormulary: ", dataFormulary);
    if (activeMainProductsSales) {
      const data = await getAllDataTableProductsBySelect(dataFormulary.selectText, dataFormulary.inputText);
      dataTableProduct(data);
    } else {
      const data = await getAllDataTableAdminBySelect(dataFormulary.selectText, dataFormulary.inputText);
      dataTableAdmin(data);
    }
    setDataFormulary({
      selectText: "",
      inputText: "",
    })
  }

  const getAllDataTableAdminBySelect = async (selectText, inputText) => {
    try {
      switch (selectText) {
        case "NOMBRE": {
          const data = await getAllClientAdminByName(currentPage - 1, 10, inputText);
          return data;
        }
        case "CORREO": {
          const data = await getAllClientAdminByEmail(currentPage - 1, 10, inputText);
          return data;
        }
        case "TELEFONO": {
          const data = await getAllClientAdminByPhone(currentPage - 1, 10, inputText);
          return data;
        }
        case "DIRECCION": {
          const data = await getAllClientAdminByAddress(currentPage - 1, 10, inputText);
          return data;
        }
        case "ELIMINADO": {
          let status = true;
          if (
            inputText === "si" ||
            inputText === "SI" ||
            inputText === "eliminado" ||
            inputText === "ELIMINADO"
          ) {
            status = false;
          }
          const data = await getAllClientAdminByStatus(currentPage - 1, 10, status);
          return data;
        }
        case "IDENTIFICACION": {
          const data = await getAllClientAdminByIdentificaction(currentPage - 1, 10, inputText);
          return data;
        }
        case "TODOS": {
          const data = await getAllClientAdmin(currentPage - 1, 10);
          return data;
        }
        default: {
          const data = await getAllClientAdmin(currentPage - 1, 10);
          return data;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getAllDataTableProductsBySelect = async (selectText, inputText) => {
    try {
      switch (selectText) {
        case "NOMBRE": {
          const data = await getAllProductPageByName(currentPageProduct - 1, 10, inputText);
          return data;
        }
        case "MARCA": {
          const data = await getAllProductPageByMark(currentPageProduct - 1, 10, inputText);
          return data;
        }
        case "MODELO": {
          const data = await getAllProductPageByModel(currentPageProduct - 1, 10, inputText);
          return data;
        }
        case "GENERO": {
          const data = await getAllProductPageByGender(currentPageProduct - 1, 10, inputText);
          return data;
        }
        case "PRECIO": {
          const number = parseFloat(inputText);
          const data = await getAllProductPageByPrice(currentPageProduct - 1, 10, number);
          return data;
        }
        case "CATEGORIA": {
          const data = await getAllProductPageByProductType(currentPageProduct - 1, 10, inputText);
          return data;
        }
        case "CODIGO": {
          const data = await getAllProductPageByCode(currentPageProduct - 1, 10, inputText);
          return data;
        }
        case "ELIMINADO": {
          if (
            inputText === "ELIMINADOS" ||
            inputText === "ELIMINADO" ||
            inputText === "eliminado" ||
            inputText === "eliminados" ||
            inputText === "si" ||
            inputText === "SI"
          ) {
            const data = await getAllProductPageByStatusFalse(currentPageProduct - 1, 10);
            return data;
          } else {
            const data = await getAllProductPages(currentPageProduct - 1, 10);
            return data;
          }
        }
        case "TODOS": {
          const data = await getAllProductPages(currentPageProduct - 1, 10);
          return data;
        }
        default: {
          const data = await getAllProductPages(currentPageProduct - 1, 10);
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
