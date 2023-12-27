/* eslint-disable react/prop-types */
export const DivButtomFromularyUpdate = ({ login, showMainAdmin }) => {
  return (
    <>
      <div className="container-form-1">
        {login.isAdmin && (
          <>
            <div className="form-perfil-input">
              <button
                className="button-perfil"
                onClick={"va a pagina productos"}
                type="button"
              >
                Productos
              </button>
            </div>
            <div className="form-perfil-input">
              <button
                className="button-perfil-admin"
                onClick={showMainAdmin}
                type="button"
              >
                Administradores
              </button>
            </div>
          </>
        )}
        <div className="form-perfil-input">
          <button className="button-perfil" type="submit">
            Guardar
          </button>
        </div>
      </div>
    </>
  );
};
