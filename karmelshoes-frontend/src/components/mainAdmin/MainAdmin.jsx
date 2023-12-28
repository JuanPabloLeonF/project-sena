import { useEffect, useState } from "react";
import { getAllClient } from "../../services/clientServices";
import "/src/css/styleMainAdmin.css";

export const MainAdmin = () => {
  const [dataTable, setDataTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getAllData();
  }, [currentPage, itemsPerPage]);

  const getAllData = async () => {
    try {
      const data = await getAllClient(currentPage, itemsPerPage);
      console.log(data);
      setDataTable(normalizeClientData(data));
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const normalizeClientData = (data) => {
    if (data && data.content && Array.isArray(data.content)) {
      return data.content.map((client) => ({
        id: client.idClientDto || 0,
        name: client.nameClientDto || "",
        email: client.emailClientDto || "",
        phone: client.phoneClientDto || "",
        address: client.addressClientDto || "",
        identification: client.identificationDto || "",
        admin: client.adminClientDto || false,
        password: client.passwordClientDto || "",
        status: client.statusClientDto || true,
      }));
    }
    return [];
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
              <th>Administrador-Estado</th>
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
                <td>{user.status ? "SI" : "NO"}</td>
                <td>{user.admin ? "SI" : "NO"}</td>
                <td>{user.identification}</td>
                <td>
                  <img
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
      <section>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </section>
    </>
  );
};
