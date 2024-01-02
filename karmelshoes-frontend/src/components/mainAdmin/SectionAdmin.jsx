import "/src/css/styleSectionAdmin.css"

export const SectionAdmin = ({showRegistrer}) => {
    return (
        <>
        <section className="section-admin">
            <h2 className="h2-admin-section">ADMINSITRADORES</h2>
            <div className="img-create-admin">
                <img onClick={showRegistrer} src="/src/assets/imgs/agregar-usuario.png" alt="" />
            </div>
        </section>
        </>
    );
}