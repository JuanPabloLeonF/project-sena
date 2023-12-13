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
import { PurchaseHistory } from "../components/senaApp/PurchaseHistory";

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
  const [activePurchaseHistory, setActivePurchaseHistory] = useState(false);

  const initPage = () => {
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
  };

  const showPurchaseHistory = () => {
    setActivePurchaseHistory(!activePurchaseHistory);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
  };

  const showBoy = () => {
    setActiveChild(!activeChild);
    setActiveGentleman(false);
    setActiveGentleman(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
  };

  const showLady = () => {
    setActiveLady(!activeLady);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
  };

  const showGentleman = () => {
    setActiveGentleman(!activeGentleman);
    setActiveChild(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
  };

  const showRegistrer = () => {
    setActiveRegistrer(!activeRegistrer);
    initPage();
  };

  const showLoging = () => {
    setActiveLoging(!activeLoging);
    initPage();
  };

  const showShoppingCart = () => {
    setActiveShoppingCart(!activeShoppingCart);
    initPage();
  };

  const showWhoWeAre = () => {
    setActiveWhoWeAre(!activeWhoWeAre);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveLady(false);
    setActiveShop(false);
    setActivePurchaseHistory(false);
  };

  const showShop = () => {
    setActiveShop(!activeShop);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveLady(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
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
        showPurchaseHistory={showPurchaseHistory}
        activeWhoWeAre={activeWhoWeAre}
        activeShop={activeShop}
        activePurchaseHistory={activePurchaseHistory}
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

      {activePurchaseHistory && (
        <PurchaseHistory initPage={initPage}></PurchaseHistory>
      )}
      <></>
    </>
  );
};
