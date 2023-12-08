export const ItemShoppingCart = () => {

    let counter = 3;
    let price = 150.99;
    return (
        <>
        <div className="div-item">
            <div className="div-img">
                <img src="/src/assets/imgs/zapato1.jpg" alt="" />
            </div>
            <div className="div-name">
                <h2>Nombre del producto</h2>
                <img src="/src/assets/imgs/circulo-marca-x.svg" alt="" />
            </div>
            <div className="div-price">
                <h2>Cantidad:</h2>
                <h2>{counter}</h2>
                <h2>{price}$</h2>
            </div>
        </div>
        </>
    );
}