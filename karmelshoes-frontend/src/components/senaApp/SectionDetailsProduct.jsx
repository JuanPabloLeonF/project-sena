/* eslint-disable react/prop-types */
import { useState } from "react";
import { FormDataInputSelectMap } from "../mainProductsSales/FormDataInputSelectMap";
import "/src/css/styleSectionDetailsProduct.css"
import { useEffect } from "react";
import { initialFormularyDetailsProduct } from "../../models/productModel";

export const SectionDetailsProduct = ({ showDetailsProduct, dataDetailsProduct }) => {

    const { product, imageUrl } = dataDetailsProduct;

    const [dataFormulary, setDataFormulary] = useState(initialFormularyDetailsProduct);
    const [optionsRenderColor, setOptionsRenderColor] = useState([]);
    const [optionsRenderSize, setOptionsRenderSize] = useState([]);

    useEffect(() => {
        handlerSetOptionRenderColor();
        handlerSetOptionRenderSize();
    }, [product]);


    const handlerSetOptionRenderColor = () => {
        if (product && product.color && product.color.length > 0) {
            const options = [
                { value: "", label: "SELECCIONA" },
                ...product.color.map((color) => ({
                    value: color,
                    label: color
                }))
            ];
            setOptionsRenderColor(options);
        } else {
            setOptionsRenderColor([{ value: "", label: "SELECCIONA" }]);
        }
    }


    const handlerSetOptionRenderSize = () => {
        if (product && product.sizes && product.sizes.length > 0) {
            const options = [
                { value: "", label: "SELECCIONA" },
                ...product.sizes.map((size) => ({
                    value: size,
                    label: size
                }))
            ];
            setOptionsRenderSize(options);
        } else {
            setOptionsRenderSize([{ value: "", label: "SELECCIONA" }]);
        }
    }

    const handlerOnChange = (event) => {
        const { name, value } = event.target;
        setDataFormulary((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        console.log(dataFormulary);
        setDataFormulary(initialFormularyDetailsProduct);
    }

    return (
        <>
            <section className="section-details-product">
                <form onSubmit={handlerOnSubmit} className="div-details-product">
                    <div className="show-img">
                        <div className="imageUrl">
                            <img src={imageUrl} alt="imagen del producto" />
                        </div>
                    </div>
                    <div className="details-product">
                        <div className="head-details-product">
                            <h2>{product.name}</h2>
                            <img onClick={showDetailsProduct} className="arrow" src="/src/assets/imgs/circulo-marca-x.svg" alt="volver atras" />
                            <h3>{product.gender}</h3>
                            <h3>${product.price}</h3>
                        </div>
                        <div className="body-head-details-product">
                            <div className="details-product-container-size-color">
                                <h3>COLOR</h3>
                                <FormDataInputSelectMap span={""} optionsRender={optionsRenderColor} name={"color"} value={dataFormulary.color} handlerSelectGenderOnChange={handlerOnChange} />
                            </div>
                            <div className="details-product-container-size-color">
                                <h3>CANTIDAD</h3>
                                <input
                                    className="input-numer-details-product"
                                    type="number"
                                    min="1"
                                    max={product.stock}
                                    value={dataFormulary.quantity}
                                    onChange={handlerOnChange}
                                    name="quantity"
                                />
                            </div>
                            <div className="details-product-container-size-color">
                                <h3>TALLA</h3>
                                <FormDataInputSelectMap span={""} optionsRender={optionsRenderSize} name={"sizes"} value={dataFormulary.sizes} handlerSelectGenderOnChange={handlerOnChange} />
                            </div>
                        </div>
                        <div className="body-body-details-product padding-top-body-head" >
                            <p>{product.description}</p>
                        </div>
                        <div className="body-footer-details-product padding-top-body-head border-top-body-body-details-product" >
                            <button type="submit">AÑADIR AL CARRITO</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}