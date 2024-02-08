/* eslint-disable react/prop-types */
export const FormularyPaymentDelivery = ({ dataFormulary, backArrow }) => {
    return (
        <>
            <div className="section-body-form-one-payment-two">
                <div className="information-delivery">
                    <div className="information-delivery-container-head">
                        <h3>INFORMACION DE ENVIO</h3>
                        <label onClick={backArrow}>EDITAR</label>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>NOMBRE</h4>
                        <h4>{dataFormulary.name}</h4>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>DIRECCION</h4>
                        <h4>{dataFormulary.address}</h4>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>CIUDAD</h4>
                        <h4>{dataFormulary.city}</h4>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>CORREO</h4>
                        <h4>{dataFormulary.email}</h4>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>TELEFONO</h4>
                        <h4>{dataFormulary.phone}</h4>
                    </div>
                </div>
                <form className="section-body-form-two">
                    <div className="section-formulary-delivery">
                        <div className="items-radious-select">
                            <input className="input-radio-delivery" type="radio" name="delivery" id="delivery" />
                            <label htmlFor="delivery" className="img-paypal-logo">
                                <img src="/src/assets/imgs/logo_paypal2x.png" alt="PayPal" />
                            </label>
                        </div>
                        <div className="items-radious-select">
                            <input type="radio" name="delivery" id="delivery-target" />
                            <label htmlFor="delivery-target">Targeta de credito o debito</label>
                        </div>
                    </div>
                    <div className="section-formulary-delivery-body">
                        <div style={{ width: "80%" }} className="payment-input">
                            <label htmlFor="target">NUMERO DE TARJETA</label>
                            <input
                                required
                                name="target"
                                id="target"
                                type="text"
                            />
                        </div>
                        <div style={{ width: "60%" }} className="payment-input">
                            <label htmlFor="target">FECHA</label>
                            <input
                                required
                                name="date"
                                id="date"
                                type="text"
                            />
                        </div>
                        <div className="form-payment-container-fourt aligtn-items">
                            <button type="submit">REALIZAR COMPRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

//https://www.paypal.com/cgibin/webscr?cmd=_express-checkout&token=EC-9JB80783DG511161B