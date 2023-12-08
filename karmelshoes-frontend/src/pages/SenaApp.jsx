import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import { Section } from "../components/senaApp/Section";
import "/src/css/styleSenaApp.css";
import "/src/css/index.css";
import { useState } from "react";
import { ShoppingCart } from "../components/senaApp/ShoppingCart";

export const SenaApp = () => {

  const [activeShoppingCart, setActiveShoppingCart] = useState(false);

  const showShoppingCart = () => {
    setActiveShoppingCart(!activeShoppingCart);
  }

  return (
    <>
      <Header></Header>
      <Nav showShoppingCart={showShoppingCart}></Nav>
      <Section></Section>
      <Main></Main>
      <Footer></Footer>
      {activeShoppingCart && <ShoppingCart showShoppingCart={showShoppingCart}></ShoppingCart>}
    </>
  );
};
