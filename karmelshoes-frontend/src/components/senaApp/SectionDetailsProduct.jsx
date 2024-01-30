/* eslint-disable react/prop-types */
import "/src/css/styleSectionDetailsProduct.css"

export const SectionDetailsProduct = ({ showDetailsProduct, dataDetailsProduct }) => {

    const { product, imageUrl } = dataDetailsProduct;

    console.log("product: ", product);

    return (
        <>
            <section className="section-details-product">
                <div className="div-details-product">
                    <div className="show-img">
                        <div className="imageUrl">
                            <img src={imageUrl} alt="imagen del producto" />
                        </div>
                    </div>
                    <div className="details-product">
                        <div className="head-details-product">
                            <h2>{product.name}</h2>
                            <img onClick={showDetailsProduct} className="arrow" src="/src/assets/imgs/circulo-marca-x.svg" alt="volver atras" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}