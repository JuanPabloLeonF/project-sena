import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import { Section } from "../components/senaApp/Section";
import "/src/css/styleSenaApp.css";
import "/src/css/index.css";
import { useState } from "react";
import { ShoppingCart } from "../components/senaApp/ShoppingCart";
import { MainLoging } from "../components/loging/MainLoging";
import { MainRegistration } from "../components/registration/MainRegistration";
import { DivShowProduct } from "../components/senaApp/DivShowProduct";
import { SectionProduct } from "../components/sectionProduct/SectionProduct";

export const SenaApp = () => {

  const [activeShoppingCart, setActiveShoppingCart] = useState(false);
  const [activeLoging, setActiveLoging] = useState(false);
  const [activeRegistrer, setActiveRegistrer] = useState(false);
  const [activeLady, setActiveLady] = useState(false);

  const showLady = () => {
    setActiveLady(!activeLady);
  }

  const showRegistrer = () => {
    setActiveRegistrer(!activeRegistrer);
  }

  const showLoging = () => {
    setActiveLoging(!activeLoging);
  }

  const showShoppingCart = () => {
    setActiveShoppingCart(!activeShoppingCart);
  }

  return (
    <>
      <Header></Header>
      <Nav showShoppingCart={showShoppingCart} showLady={showLady}></Nav>
      <Section showLoging={showLoging} showRegistrer={showRegistrer}></Section>
      <Main></Main>
      {activeLoging && <MainLoging showLoging={showLoging}></MainLoging>}
      {activeRegistrer && <MainRegistration showRegistrer={showRegistrer}></MainRegistration>}
      {activeLady && <DivShowProduct></DivShowProduct>}
      {activeShoppingCart && <ShoppingCart showShoppingCart={showShoppingCart}></ShoppingCart>}
      <Footer></Footer>
      <SectionProduct showLady={showLady}></SectionProduct>
    </>
  );
};
