/* eslint-disable react/prop-types */
export const ItemShoppingCart = ({product}) => {
    return (
        <>
        <div className="div-item">
            <div className="div-img">
                <img className="img" src={product.imageUrl} alt="imagen del producto" />
            </div>
            <div className="div-name">
                <h2>{product.name}</h2>
                <img className="img" src="/src/assets/imgs/circulo-marca-x.svg" alt="quitar producto" />
            </div>
            <div className="div-price">
                <h2>Cantidad:</h2>
                <h2>{product.quantity}</h2>
                <h2>{product.priceTotalProduct}$</h2>
                <h2>Color:</h2>
                <h2>{product.color}</h2>
            </div>
        </div>
        </>
    );
}