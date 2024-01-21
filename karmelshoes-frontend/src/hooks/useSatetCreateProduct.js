// useStateCreateProduct.js
import {
    useReducer
} from "react";
import {
    createProductReducer
} from "../reducer/createProductReducer";
import {
    initialStateFormularyCreateProduct
} from "../models/productModel";
import {
    createNewProduct
} from "../services/productsService";

export const useStateCreateProduct = (updateMainAdmin) => {
    const [state, dispatch] = useReducer(createProductReducer, initialStateFormularyCreateProduct);
    const {
        dataFormulary,
        errors,
        activeSectionColor,
        messageSuccesing,
        optionsModel,
        optionsProductType,
    } = state;

    const {
        name,
        description,
        price,
        stock,
        productType,
        mark,
        model,
        sizes,
        color,
        gender,
        img,
        status,
        code
    } = dataFormulary;

    const handlerOnChangeImage = (event) => {
        dispatch({
            type: "SET_FORM_DATA_IMG",
            payload: event.target.files[0]
        });
    };

    const handlerOnChange = (event) => {
        const {
            name,
            value
        } = event.target;
        dispatch({
            type: "SET_FORM_DATA",
            payload: {
                ...dataFormulary,
                [name]: value
            }
        });
    };

    const handlerSelectGenderOnChange = (event) => {
        const {
            name,
            value
        } = event.target;
        dispatch({
            type: "SET_FORM_DATA_SELECT",
            payload: {
                name,
                value
            }
        });
    };

    const handlerResetFormulary = () => {
        dispatch({
            type: "SET_FORM_DATA",
            payload: initialStateFormularyCreateProduct.dataFormulary
        })
    };

    const dataListColorAndListSize = (data) => {
        dispatch({
            type: "SET_FORM_DATA",
            payload: {
                ...dataFormulary,
                color: data.colors,
                sizes: data.sizes
            }
        })
    }

    const showSectionColor = () => {
        dispatch({
            type: "TOGGLE_SECTION_COLOR"
        });
      };

    const handlerOnsubmit = async (event) => {
        event.preventDefault();
        if (validateProductFields(dataFormulary)) {
            try {
                dispatch({
                    type: "SET_SUCCESS_MESSAGE",
                    payload: "Se Creo Correctamente El Producto"
                })
                await createNewProduct(dataFormulary, dataFormulary.img);
                updateMainAdmin();
                dispatch({
                    type: "SET_FORM_DATA",
                    payload: initialStateFormularyCreateProduct.dataFormulary
                })
            } catch (error) {
                const errors = error.response.data;
                console.log("errors: ", errors);
                console.log(errors.message);
                if (errors.code === 400) {
                    dispatch({
                        type: "SET_SUCCESS_MESSAGE",
                        payload: errors.message
                    })
                }
            }
        }
    };

    const validateProductFields = (product) => {
        const errors = {};

        if (product.name.length < 2 || product.name.length > 200) {
            errors.name = "El nombre debe tener entre 2 y 200 caracteres";
        }

        if (product.description.length < 8) {
            errors.description = "La descripción debe tener al menos 8 caracteres";
        }

        if (product.price <= 0) {
            errors.price = "El precio debe ser mayor a 0.00";
        }

        if (product.stock <= 0) {
            errors.stock = "El valor de stock debe ser mayor a 0.00";
        }

        if (product.productType.length < 4 || product.productType.length > 200) {
            errors.productType =
                "El tipo de producto debe tener entre 4 y 200 caracteres";
        }

        if (product.mark.length < 4 || product.mark.length > 200) {
            errors.mark = "La marca debe tener entre 4 y 200 caracteres";
        }

        if (product.model.length < 4 || product.model.length > 200) {
            errors.model = "El modelo no puede estar vacio";
        }

        if (product.gender.length < 4 || product.gender.length > 200) {
            errors.gender = "El genero no puede estar vacio";
        }

        if (product.productType.length < 4 || product.productType.length > 200) {
            errors.productType = "La categoria no puede estar vacia";
        }

        if (product.sizes.length === 0) {
            errors.sizes = "Las tallas no pueden estar vacios";
        }

        if (product.color.length === 0) {
            errors.color = "Los colores no pueden estar vacios";
        }

        if (product.img.length === 0) {
            errors.img = "La imagen es requerida";
        }

        if (product.code.length < 5) {
            errors.code = "El campo code debe tener al menos 5 caracteres";
        }

        dispatch({
            type: "SET_ERROR_STATE",
            payload: errors
        })
        return Object.keys(errors).length === 0;
    };

    const updateModelOptions = () => {
        if (dataFormulary.gender === "DAMA" || dataFormulary.gender === "NIÑA") {
            dispatch({
                type: "SET_OPTIONS_MODEL",
                payload: [{
                        value: "",
                        label: "SELECCIONA"
                    },
                    {
                        value: "ZAPATOS",
                        label: "ZAPATOS"
                    },
                    {
                        value: "TENIS",
                        label: "TENIS"
                    },
                    {
                        value: "SANDALIAS",
                        label: "SANDALIAS"
                    },
                ],
            })
        } else if (
            dataFormulary.gender === "CABALLERO" ||
            dataFormulary.gender === "NIÑO"
        ) {
            dispatch({
                type: "SET_OPTIONS_MODEL",
                payload: [{
                        value: "",
                        label: "SELECCIONA"
                    },
                    {
                        value: "ZAPATOS",
                        label: "ZAPATOS"
                    },
                    {
                        value: "TENIS",
                        label: "TENIS"
                    },
                    {
                        value: "SANDALIAS",
                        label: "SANDALIAS"
                    },
                ],
            })
        } else {
            dispatch({
                type: "SET_OPTIONS_MODEL",
                payload: [{
                    value: "",
                    label: "SELECCIONA"
                }],
            })
        }
    };

    const updateProductTypeOptions = () => {
        if (dataFormulary.model === "ZAPATOS") {
            dispatch({
                type: "SET_OPTIONS_PRODUCT_TYPE",
                payload: [{
                        value: "",
                        label: "SELECCIONA"
                    },
                    {
                        value: "BOTAS",
                        label: "BOTAS"
                    },
                    {
                        value: "BOTINES",
                        label: "BOTINES"
                    },
                ],
            })
        } else if (dataFormulary.model === "SANDALIAS") {
            dispatch({
                type: "SET_OPTIONS_PRODUCT_TYPE",
                payload: [{
                        value: "",
                        label: "SELECCIONA"
                    },
                    {
                        value: "PLANAS",
                        label: "PLANAS"
                    },
                    {
                        value: "PLATAFORMAS",
                        label: "PLATAFORMAS"
                    },
                    {
                        value: "MEDIANAS",
                        label: "MEDIANAS"
                    },
                ],
            })
        } else if (dataFormulary.model === "TENIS") {
            dispatch({
                type: "SET_OPTIONS_PRODUCT_TYPE",
                payload: [{
                        value: "",
                        label: "SELECCIONA"
                    },
                    {
                        value: "SNEAKERS",
                        label: "SNEAKERS"
                    },
                    {
                        value: "PLATAFORMAS",
                        label: "PLATAFORMAS"
                    },
                    {
                        value: "SIN CORDONES",
                        label: "SIN CORDONES"
                    },
                    {
                        value: "DEPORTIVOS",
                        label: "DEPORTIVOS"
                    },
                ],
            })
        } else if (
            (dataFormulary.model === "TACONES" &&
                (dataFormulary.gender === "DAMA" || dataFormulary.gender === "NIÑA"))
        ) {
            dispatch({
                type: "SET_OPTIONS_PRODUCT_TYPE",
                payload: [{
                        value: "",
                        label: "SELECCIONA"
                    },
                    {
                        value: "ALTOS",
                        label: "ALTOS"
                    },
                    {
                        value: "BAJOS",
                        label: "BAJOS"
                    },
                    {
                        value: "MEDIOS",
                        label: "MEDIOS"
                    },
                ],
            })
        } else {
            dispatch({
                type: "SET_OPTIONS_PRODUCT_TYPE",
                payload: [{
                    value: "",
                    label: "SELECCIONA"
                }],
            })
        }
    };

    return {
        state,
        handlerOnsubmit,
        handlerOnChange,
        handlerOnChangeImage,
        handlerSelectGenderOnChange,
        showSectionColor,
        updateProductTypeOptions,
        updateModelOptions,
        handlerResetFormulary,
        dataListColorAndListSize,
        errors,
        messageSuccesing,
        optionsModel,
        optionsProductType,
        dataFormulary,
    };
};