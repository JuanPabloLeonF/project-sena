/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "/src/css/styleSectionAdmin.css";
import { useStateSectionAdminFilter } from "../../hooks/useStateSectionAdminFilter";

export const SectionAdmin = ({
  showRegistrer,
  activeMainProductsSales,
  showFormularyCreateProduct,
  currentPageProduct,
  currentPage,
  dataTableAdmin,
  dataTableProduct,
}) => {
  const {
    state,
    handlerOnChange,
    optionsRender,
    handlerOnSubmit,
    handlerSetData,
    selectText,
    inputText,
    optionSelect,
  } = useStateSectionAdminFilter(activeMainProductsSales, dataTableProduct, dataTableAdmin, currentPage, currentPageProduct);

  useEffect(() => {
    optionsRender();
    handlerSetData();
  }, [activeMainProductsSales])

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
