import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "/src/css/stylePurchaseHistory.css";

export const PurchaseHistory = ({ initPage }) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualInteraction, setIsManualInteraction] = useState(false);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 199.99,
      tipo: "Dama",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 149.99,
      tipo: "Dama",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 99.99,
      tipo: "Caballero",
    },
    {
      id: 4,
      name: "Producto 4",
      price: 129.99,
      tipo: "Caballero",
    },
    {
      id: 5,
      name: "Producto 5",
      price: 179.99,
      tipo: "Dama",
    },
    {
      id: 6,
      name: "Producto 6",
      price: 89.99,
      tipo: "Caballero",
    },
    {
      id: 7,
      name: "Producto 7",
      price: 159.99,
      tipo: "Caballero",
    },
    {
      id: 8,
      name: "Producto 8",
      price: 209.99,
      tipo: "Caballero",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoScrollEnabled && products.length > 4) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % products.length;
          let counter = products.length - 3;
          if (nextIndex >= counter) {
            return 0;
          } else {
            return nextIndex;
          }
        });
      }
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isAutoScrollEnabled, products]);

  const handleMouseDown = () => {
    setIsManualInteraction(true);
    setIsAutoScrollEnabled(false);
  };

  const handleMouseUp = () => {
    setIsManualInteraction(false);
    setTimeout(() => {
      setIsAutoScrollEnabled(true);
    }, 10000);
  };

  return (
    <>
      <div className="purchase-history">
        <div className="container-sub-history">
          <div className="container-header">
            <h2>Historial De Compras</h2>
            <img
              onClick={initPage}
              src="/src/assets/imgs/circulo-marca-x.png"
              alt=""
            />
          </div>
          <div className="container-body">
            <div className="products-title">
              <h3>Tus Productos</h3>
            </div>
            <motion.div
              className="container-products"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              <motion.div
                className="container-products-inner"
                drag={"x"}
                dragConstraints={{ right: 0, left: -720 }}
                animate={{ x: -currentIndex * 180 }}
              >
                {products.map((product, index) => (
                  <motion.div key={index} className="container-the-product">
                    <div className="img-product">
                      <img src="/src/assets/imgs/zapato1.jpg" alt="" />
                    </div>
                    <div className="body-product">
                      <h4>Nombre:</h4>
                      <h4>{product.name}</h4>
                      <h4>Precio:</h4>
                      <h4>{product.price}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <div className="body-container-information">
              <div className="left-container">
                  <h2>Total De Productos</h2>
                  <h2>{4}</h2>
                  <h2>Direccion Mas Usada</h2>
                  <h2>{"No se una calle cualquiera"}</h2>
              </div>
              <div className="right-container">
                  <h2>Metodo De Pago Mas Usado</h2>
                  <h2>{"Efectivo"}</h2>
                  <h2>Total:</h2>
                  <h2>{10000.00}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
