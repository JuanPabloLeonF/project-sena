/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "/src/css/styleMainAdmin.css";

export const MainAdmin = ({
  currentPage,
  setTotalPages,
  showDataAdmin,
  dataTableAdmin,
  dataTable,
  getDataAdmin,
  forcerRender,
}) => {
  useEffect(() => {
    getAllData();
  }, [currentPage, forcerRender]);

  const getAllData = () => {
    try {
      dataTableAdmin();
    } catch (error) {
      console.log(error);
    }
  };

  const handlerDataAdmin = (admin) => {
    showDataAdmin();
    getDataAdmin(admin);
  };

  return (
    <>
      <main className="main-admin">
        <table className="table-admin">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Direccion</th>
              <th>Eliminado-Estado</th>
              <th>Identificacion</th>
              <th>Configuracion</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.status ? "NO" : "SI"}</td>
                <td>{user.identification}</td>
                <td>
                  <img
                    onClick={() => handlerDataAdmin(user)}
                    className="img-table"
                    src="/src/assets/imgs/cong-admin.png"
                    alt="icono de configuracion"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
