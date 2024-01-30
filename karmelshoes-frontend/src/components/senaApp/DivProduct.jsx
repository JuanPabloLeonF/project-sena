import { useEffect, useState } from "react";
import { getImgProductById } from "../../services/productsService";

/* eslint-disable react/prop-types */
export const DivProduct = ({ product, showDetailsProduct, setDataDetailsProduct }) => {

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    getImgByIdProduct();
  }, [product])

  const getImgByIdProduct = async () => {
    try {
      const dataImg = await getImgProductById(product.id);
      if (dataImg instanceof ArrayBuffer) {
        const blob = new Blob([dataImg], { type: 'image/*' });
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } else {
        console.error('Los datos recibidos no son un ArrayBuffer.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handlerAddToShoppingCart = () => {
    showDetailsProduct();
    const data = {
      product: product,
      imageUrl: imageSrc,
    };
    setDataDetailsProduct(data);
  }

  return (
    <div className="div-product">
      <div className="div-head">
        <div>
          <img onClick={handlerAddToShoppingCart} className="img-1" src={imageSrc} alt="imagen del poruducto" />
        </div>
      </div>
      <div className="div-description">
        <h4>Tipo:</h4>
        <p>{product.description}</p>
      </div>
      <div className="div-price">
        <h4>Precio:</h4>
        <p>{product.price}</p>
      </div>
      <div className="div-color">
        <h4>Nombre:</h4>
        <p>{product.name}</p>
      </div>
    </div>
  );
};
