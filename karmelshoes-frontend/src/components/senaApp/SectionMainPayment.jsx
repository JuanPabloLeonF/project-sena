/* eslint-disable react/prop-types */
import { useState } from "react";
import { ItemProductPayment } from "./ItemProductPayment";
import "/src/css/styleSectionMainPayment.css"

export const SectionMainPayment = ({ showMainPayment, clienteOrAdmin, listModelProductWithColorsAndSizes, modelProductsShoppingCart }) => {

    const [dataFormulary, setDataFormulary] = useState(clienteOrAdmin);
    const [errors, setErrors] = useState({});
    console.log("listModelProductWithColorsAndSizes: ", listModelProductWithColorsAndSizes);
    console.log("modelProductsShoppingCart: ", modelProductsShoppingCart);

    function interval() {
        setTimeout(() => {
            console.log("estoy en el intervalo");
            setErrors({});
        }, 5000);
    }

    const handlerOnChange = (event) => {
        const { name, value } = event.target;
        setDataFormulary((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        if (validateFormulary(dataFormulary)) {
            try {
                console.log(dataFormulary);
                setErrors({});
            } catch (error) {
                console.log("erros: ", error);
            }
        }
        interval();
    }

    const validateFormulary = (data) => {
        const newErrors = {};
        if (data.phone.length < 14 || data.phone.length > 14 || !/^\+57\s\d{10}$/.test(data.phone)) {
            newErrors.phone = "Debe tener 10 digitos y +57";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const renderListOrEmpty = () => {
        if (modelProductsShoppingCart.productEntitiesShoppingCartDto) {
            const uniqueProductIds = new Set();
            const uniqueProducts = Object.values(modelProductsShoppingCart.productEntitiesShoppingCartDto).filter(product => {
                if (!uniqueProductIds.has(product.id)) {
                    uniqueProductIds.add(product.id);
                    return true;
                }
                return false;
            });

            if (uniqueProducts.length === 0) {
                return (
                    <div className="empty-list-prooducts">
                        <div className="empty-img-list">
                            <img src="/src/assets/imgs/fondo-carro-compras -sin-fondo.png" alt="" />
                        </div>
                    </div>
                );
            }

            return uniqueProducts.map((product, index) => (
                <ItemProductPayment
                    key={index}
                    product={product}
                    quantity={getProductQuantity(product.id, modelProductsShoppingCart.productEntitiesShoppingCartDto)}
                />
            ));

        } else {
            return (
                <div className="empty-list-prooducts">
                    <div className="empty-img-list">
                        <img src="/src/assets/imgs/fondo-carro-compras -sin-fondo.png" alt="" />
                    </div>
                </div>
            )
        }
    }

    const getProductQuantity = (productId, productEntities) => {
        return productEntities.filter(product => product.id === productId).length;
    };

    return (
        <>
            <section className="section-main-payment">
                <div className="section-main-payment-div">
                    <div className="section-payment-head">
                        <h2>PASARELA DE PAGO</h2>
                        <img onClick={showMainPayment} src="/src/assets/imgs/circulo-marca-x.png" alt="Cerrar" />
                    </div>
                    <div className="section-payment-body">
                        <form onSubmit={handlerOnSubmit} className="section-body-form-one-payment">
                            <div className="form-payment-container-one">
                                <div className="payment-input">
                                    <label htmlFor="name">NOMBRE</label>
                                    <input
                                        required
                                        onChange={handlerOnChange}
                                        className={errors.name ? "error-input-payment" : null}
                                        value={errors.name ? errors.name : dataFormulary.name}
                                        name="name"
                                        id="name"
                                        type="text"
                                    />
                                </div>
                                <div className="payment-input">
                                    <label htmlFor="city">CIUDAD</label>
                                    <input
                                        required
                                        onChange={handlerOnChange}
                                        style={errors.city ? { color: "red" } : null}
                                        value={errors.city ? errors.city : dataFormulary.city}
                                        name="city"
                                        id="city"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="form-payment-container-two">
                                <div className="payment-input">
                                    <label htmlFor="address">DIRECCION & NUMERO</label>
                                    <input
                                        required
                                        onChange={handlerOnChange}
                                        style={errors.address ? { color: "red" } : null}
                                        value={errors.address ? errors.address : dataFormulary.address}
                                        id="address"
                                        type="text"
                                        name="address"
                                    />
                                </div>
                            </div>
                            <div className="form-payment-container-three">
                                <div className="payment-input">
                                    <label htmlFor="email">CORRREO</label>
                                    <input
                                        required
                                        onChange={handlerOnChange}
                                        style={errors.email ? { color: "red" } : null}
                                        value={errors.email ? errors.email : dataFormulary.email}
                                        name="email"
                                        id="email"
                                        type="email"
                                    />
                                </div>
                                <div className="payment-input">
                                    <label htmlFor="phone">TELEFONO</label>
                                    <input
                                        required
                                        onChange={handlerOnChange}
                                        style={errors.phone ? { color: "red" } : null}
                                        value={errors.phone ? errors.phone : dataFormulary.phone}
                                        id="phone"
                                        type="text"
                                        name="phone"
                                    />
                                </div>
                            </div>
                            <div className="form-payment-container-fourt">
                                <button type="submit">GUARDAR Y CONTINUAR</button>
                            </div>
                        </form>
                        <div className="setion-body-div-payment">
                            <div className="section-body-container-one-div-payment">
                                <h3>TU CESTA</h3>
                            </div>
                            <div className="section-body-container-two-div-payment">
                                {renderListOrEmpty()}
                            </div>

                            <div className="section-body-container-three-div-payment">
                                <h3>TOTAL:</h3>
                                <h3>{modelProductsShoppingCart.totalPriceShoppingCartDto}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}