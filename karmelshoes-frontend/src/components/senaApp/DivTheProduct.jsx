import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const DivTheProduct = ({ isAutoScrollEnabled, products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  return (
    <>
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
              <h4>{product.nameProductDto}</h4>
              <h4>Precio:</h4>
              <h4>{product.priceProductDto}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
