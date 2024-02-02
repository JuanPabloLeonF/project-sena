import { useReducer } from "react";
import { sectionDetailsProductReducer } from "../reducer/sectionDetailsProductReducer";
import { initialFormularyDetailsProduct, stateInitialDetailsProductsReducer } from "../models/productModel";

export const useStateSectionDetailsProduct = (setModelProductsShoppingCart, product, imageUrl) => {

    const [state, dispatch] = useReducer(sectionDetailsProductReducer, stateInitialDetailsProductsReducer);

    const { dataFormulary, optionRenderColor, optionRenderSize } = state;

    const handlerSetOptionRenderColor = (product) => {
        const defaultOption = { value: "", label: "SELECCIONA" };

        if (product && Array.isArray(product.color)) {
            const options = [
                defaultOption,
                ...product.color.map((color) => ({
                    value: color,
                    label: color
                }))
            ];
            dispatch({
                type: "SET_OPTION_RENDER_COLOR",
                payload: options
            });
        } else {
            dispatch({
                type: "SET_OPTION_RENDER_COLOR",
                payload: [defaultOption]
            });
        }
    };

    const handlerSetOptionRenderSize = (product) => {
        const defaultOption = { value: "", label: "SELECCIONA" };

        if (product && Array.isArray(product.sizes)) {
            const options = [
                defaultOption,
                ...product.sizes.map((size) => ({
                    value: size,
                    label: size
                }))
            ];
            dispatch({
                type: "SET_OPTION_RENDER_SIZE",
                payload: options
            });
        } else {
            dispatch({
                type: "SET_OPTION_RENDER_SIZE",
                payload: [defaultOption]
            });
        }
    };

    const handlerOnChange = (event) => {
        const { name, value } = event.target;
        dispatch({
            type: "SET_FORM_DATA",
            payload: {
                ...state.dataFormulary,
                [name]: value
            }
        })
    }

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        try {
            let priceTotalProduct = state.dataFormulary.quantity * product.price;
            const newProduct = {
                id: product.id,
                name: product.name,
                imageUrl: imageUrl,
                color: state.colors,
                quantity: state.dataFormulary.quantity,
                sizes: state.sizes,
                price: product.price,
                priceTotalProduct: priceTotalProduct,
            }

            console.log("state: ", state);
            console.log("newProduct: ", newProduct);

            setModelProductsShoppingCart(newProduct);
            dispatch({
                type: "SET_FORM_DATA",
                payload: initialFormularyDetailsProduct
            })
            dispatch({
                type: "SET_ACTIVATE_MESSAGE",
                payload: true,
            })
        } catch (error) {
            console.log(error);
        }
    }

    const setActivateMessage = () => {
        dispatch({
            type: "SET_ACTIVATE_MESSAGE",
            payload: false
        })
    }

    return {
        state,
        handlerSetOptionRenderColor,
        handlerSetOptionRenderSize,
        handlerOnChange,
        handlerOnSubmit,
        dataFormulary,
        optionRenderColor,
        optionRenderSize,
        setActivateMessage,
    }
}