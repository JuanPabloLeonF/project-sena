export const DivBodyContainerInformation = () => {
  return (
    <>
      <div className="body-container-information">
        <div className="left-container">
          <h2>Total De Productos</h2>
          <h2>{4}</h2>
          <h2>Direccion Mas Usada</h2>
          <h2>{"No se una calle cualquiera"}</h2>
        </div>
        <div className="right-container">
          <h2>Metodo De Pago Mas Usado</h2>
          <h2>{"Efectivo"}</h2>
          <h2>Total:</h2>
          <h2>{10000.0}</h2>
        </div>
      </div>
    </>
  );
};
