import { Header } from "/src/components/senaApp/Header";
import { Nav } from "/src/components/senaApp/Nav";
import { Footer } from "/src/components/senaApp/Footer";
import { MainShop } from "../components/shop/MainShop";

import "/src/css/styleShop.css";

export const Shop = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <section></section>
      <MainShop></MainShop>
      <Footer></Footer>
    </>
  );
};
