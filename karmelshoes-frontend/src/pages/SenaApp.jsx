import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import { Section } from "../components/senaApp/Section";
import { useState } from "react";
import { ShoppingCart } from "../components/senaApp/ShoppingCart";
import { MainLoging } from "../components/loging/MainLoging";
import { MainRegistration } from "../components/registration/MainRegistration";
import { DivShowProduct } from "../components/senaApp/DivShowProduct";
import { SectionProduct } from "../components/sectionProduct/SectionProduct";
import { MainWhoWeAre } from "../components/whoWeAre/MainWhoWeAre";
import { MainShop } from "../components/shop/MainShop";

import "/src/css/styleSenaApp.css";
import "/src/css/index.css";
import "/src/css/styleShop.css";

export const SenaApp = () => {
  const [activeShoppingCart, setActiveShoppingCart] = useState(false);
  const [activeLoging, setActiveLoging] = useState(false);
  const [activeRegistrer, setActiveRegistrer] = useState(false);
  const [activeLady, setActiveLady] = useState(false);
  const [activeGentleman, setActiveGentleman] = useState(false);
  const [activeChild, setActiveChild] = useState(false);
  const [activeWhoWeAre, setActiveWhoWeAre] = useState(false);
  const [activeShop, setActiveShop] = useState(false);

  const initPage = () => {
    setActiveGentleman(false);
    setActiveLady(false);
    setActiveChild(false);
  };

  const showBoy = () => {
    setActiveChild(!activeChild);
    setActiveGentleman(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
  };

  const showLady = () => {
    setActiveLady(!activeLady);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
  };

  const showGentleman = () => {
    setActiveGentleman(!activeGentleman);
    setActiveLady(false);
    setActiveChild(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
  };

  const showRegistrer = () => {
    setActiveRegistrer(!activeRegistrer);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    initPage();
  };

  const showLoging = () => {
    setActiveLoging(!activeLoging);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    initPage();
  };

  const showShoppingCart = () => {
    setActiveShoppingCart(!activeShoppingCart);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    initPage();
  };

  const showWhoWeAre = () => {
    setActiveWhoWeAre(!activeWhoWeAre);
    setActiveShop(false);
    initPage();
  };

  const showShop = () => {
    setActiveShop(!activeShop);
    setActiveWhoWeAre(false);
    initPage();
  };

  const renderComponentMain = () => {
    if (activeWhoWeAre) {
      return <MainWhoWeAre />;
    } else if (activeShop) {
      return <MainShop></MainShop>;
    } else {
      return <Main></Main>;
    }
  };

  const renderComponentSection = () => {
    if (activeWhoWeAre) {
      return null;
    } else {
      return (
        <Section
          showLoging={showLoging}
          showRegistrer={showRegistrer}
        ></Section>
      );
    }
  };

  return (
    <>
      <Header></Header>
      <Nav
        initPage={initPage}
        showShoppingCart={showShoppingCart}
        showLady={showLady}
        showGentleman={showGentleman}
        showBoy={showBoy}
        activeChild={activeChild}
        activeLady={activeLady}
        activeGentleman={activeGentleman}
        showWhoWeAre={showWhoWeAre}
        showShop={showShop}
        activeWhoWeAre={activeWhoWeAre}
        activeShop={activeShop}
      ></Nav>
      {renderComponentSection()}
      {renderComponentMain()}
      <Footer></Footer>
      {activeShoppingCart && (
        <ShoppingCart showShoppingCart={showShoppingCart}></ShoppingCart>
      )}
      {activeLoging && <MainLoging showLoging={showLoging}></MainLoging>}
      {activeRegistrer && (
        <MainRegistration showRegistrer={showRegistrer}></MainRegistration>
      )}

      {(activeLady || activeGentleman || activeChild) && (
        <SectionProduct
          activeChild={activeChild}
          activeLady={activeLady}
          activeGentleman={activeGentleman}
        ></SectionProduct>
      )}
      {(activeLady || activeGentleman || activeChild) && (
        <DivShowProduct></DivShowProduct>
      )}
      <></>
    </>
  );
};
