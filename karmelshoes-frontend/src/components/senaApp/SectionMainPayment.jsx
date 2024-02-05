/* eslint-disable react/prop-types */
import "/src/css/styleSectionMainPayment.css"

export const SectionMainPayment = ({ showMainPayment }) => {
    return (
        <>
            <section className="section-main-payment">
                <div className="section-main-payment-div">
                    <div className="section-payment-head">
                        <h2>PASARELA DE PAGO</h2>
                        <img onClick={showMainPayment} src="/src/assets/imgs/circulo-marca-x.png" alt="Cerrar" />
                    </div>
                    <div className="section-payment-body">
                        <form action="" className="section-body-form-one-payment">
                            <div className="form-payment-container-one">
                                <div className="payment-input">
                                    <label htmlFor="name">NOMBRE</label>
                                    <input name="name" id="name" type="text" />
                                </div>
                                <div className="payment-input">
                                    <label htmlFor="city">CIUDAD</label>
                                    <input id="city" type="text" />
                                </div>
                            </div>
                            <div className="form-payment-container-two">
                                <div className="payment-input">
                                    <label htmlFor="address">DIRECCION & NUMERO</label>
                                    <input id="address" type="text" />
                                </div>
                            </div>
                            <div className="form-payment-container-three">
                                <div className="payment-input">
                                    <label htmlFor="email">CORRREO</label>
                                    <input name="email" id="email" type="text" />
                                </div>
                                <div className="payment-input">
                                    <label htmlFor="phone">TELEFONO</label>
                                    <input id="phone" type="text" />
                                </div>
                            </div>
                            <div className="form-payment-container-fourt">
                                <button type="submit">GUARDAR Y CONTINUAR</button>
                            </div>
                        </form>
                        <div className="setion-body-div-payment">
                            carrito
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}