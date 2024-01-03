import "/src/css/styleSectionAdmin.css";

export const SectionAdmin = ({ showRegistrer, activeMainProductsSales }) => {
  return (
    <>
      <section className="section-admin">
        {activeMainProductsSales ? (
          <h2 className="h2-admin-section">PRODUCTOS</h2>
        ) : (
          <h2 className="h2-admin-section">ADMINSITRADORES</h2>
        )}
        <div className="img-create-admin">
          <img
            onClick={showRegistrer}
            src="/src/assets/imgs/agregar-usuario.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};