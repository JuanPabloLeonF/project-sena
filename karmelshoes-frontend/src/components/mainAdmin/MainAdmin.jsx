import { useEffect, useState } from "react";
import { getAllClientAdmin } from "../../services/clientServices";
import "/src/css/styleMainAdmin.css";

export const MainAdmin = ({ currentPage, setTotalPages, showDataAdmin }) => {
  const [dataTable, setDataTable] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    getAllData();
  }, [currentPage, itemsPerPage]);

  const getAllData = async () => {
    try {
      const data = await getAllClientAdmin(currentPage - 1, itemsPerPage);
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
                <td>{user.identification}</td>
                <td>
                  <img
                    onClick={showDataAdmin}
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
