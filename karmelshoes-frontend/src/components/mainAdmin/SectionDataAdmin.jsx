/* eslint-disable react/prop-types */
import { DivContainerInputFormularyUpdate } from "../senaApp/DivContainerInputFormularyUpdate";
import "/src/css/styleSectionDataAdmin.css";
import { useEffect } from "react";
import { useStateDataAdmin } from "../../hooks/useStateDataAdmin";

export const SectionDataAdmin = ({ showDataAdmin, dataAdmin, dataTableAdmin, updateMainAdmin}) => {

  const {
    updateFieldsWithDataClient,
    handlerOnSubmit,
    handlerOnChange,
    erroState,
    clientModelId,
    handlerDeleteAdmin
  } = useStateDataAdmin(dataAdmin);

  useEffect(() => {
    dataAdmin.password = "Null123";
    updateFieldsWithDataClient(dataAdmin);
  }, [dataAdmin]);

  const handlerDataAdminDelete = () => {
    handlerDeleteAdmin(dataAdmin);
    dataTableAdmin();
    updateMainAdmin();
  }

  const handlerDataAdmin = () => {
    dataTableAdmin();
    updateMainAdmin();
  }

  const handlerDataAdminClose = () => {
    dataTableAdmin();
    updateMainAdmin();
    showDataAdmin();
  }

  return (
    <>
      <section className="data-admin">
        <div className="data-admin-div">
          <div className="data-admin-head">
            <div className="data-admin-title">DATOS</div>
            <div className="data-admin-img">
              <img
                onClick={handlerDataAdminClose}
                src="/src/assets/imgs/circulo-marca-x.png"
                alt=""
              />
            </div>
          </div>
          <form onSubmit={handlerOnSubmit} className="data-admin-body">
            <DivContainerInputFormularyUpdate
              erroState={erroState}
              handlerOnChange={handlerOnChange}
              clientModelId={clientModelId}
            />
            <div className="data-admin-div-buttom">
              <div className="data-admin-div-delete-admin">
                <button onClick={handlerDataAdminDelete} className="buttom-data-admin" type="button">
                  <h2>ELIMINAR</h2>
                </button>
              </div>
              <button onClick={handlerDataAdmin} className="buttom-data-admin" type="submit">
                <h2>GUARDAR</h2>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
