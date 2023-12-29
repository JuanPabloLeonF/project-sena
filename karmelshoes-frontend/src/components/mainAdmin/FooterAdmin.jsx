/* eslint-disable react/prop-types */

import "/src/css/styleFooterAdmin.css"

export const FooterAdmin = ({currentPage, setCurrentPage, totalPages}) => {
  return (
    <>
      <footer className="section-pagination">
        <div className="pagination">
          <button
            className="buttom-pagination"
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span className="text-span">
            Página {currentPage} de {totalPages}
          </span>
          <button
            className="buttom-pagination"
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </footer>
    </>
  );
};
