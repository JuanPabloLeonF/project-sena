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
import { NavPerfil } from "../components/senaApp/NavPefil";
import { MainPerfil } from "../components/senaApp/MainPerfil";
import { AuthenticationProvider } from "../context/AuthenticationProvider";
import { BrowserRouter } from "react-router-dom";

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
  const [activeNavPerfil, setActiveNavPerfil] = useState(false);

  const initPage = () => {
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
    setActiveNavPerfil(false);
  };

  const showPurchaseHistory = () => {
    setActivePurchaseHistory(!activePurchaseHistory);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActiveNavPerfil(false);
  };

  const showBoy = () => {
    setActiveChild(!activeChild);
    setActiveGentleman(false);
    setActiveGentleman(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
    setActiveNavPerfil(false);
  };

  const showLady = () => {
    setActiveLady(!activeLady);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
    setActiveNavPerfil(false);
  };

  const showGentleman = () => {
    setActiveGentleman(!activeGentleman);
    setActiveChild(false);
    setActiveLady(false);
    setActiveShop(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
    setActiveNavPerfil(false);
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
    setActiveNavPerfil(false);
  };

  const showShop = () => {
    setActiveShop(!activeShop);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveLady(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
    setActiveNavPerfil(false);
  };

  const showNavPerfil = () => {
    setActiveNavPerfil(!activeNavPerfil);
    setActiveGentleman(false);
    setActiveChild(false);
    setActiveLady(false);
    setActiveWhoWeAre(false);
    setActivePurchaseHistory(false);
    setActiveShop(false);
  };

  const renderComponentMain = () => {
    if (activeWhoWeAre) {
      return <MainWhoWeAre />;
    } else if (activeShop) {
      return <MainShop></MainShop>;
    } else if (activeNavPerfil) {
      return <MainPerfil></MainPerfil>;
    } else {
      return <Main></Main>;
    }
  };

  const renderComponentSection = () => {
    if (activeNavPerfil) {
      return null;
    } else if (!activeWhoWeAre) {
      return (
        <Section
          showLoging={showLoging}
          showRegistrer={showRegistrer}
        ></Section>
      );
    } else {
      return null;
    }
  };

  const renderComponentForSectionMain = () => {
    if (activeShoppingCart) {
      return <ShoppingCart showShoppingCart={showShoppingCart}></ShoppingCart>;
    } else if (activeLoging) {
      return <MainLoging showLoging={showLoging}></MainLoging>;
    } else if (activeRegistrer) {
      return (
        <MainRegistration showRegistrer={showRegistrer}></MainRegistration>
      );
    } else if (activeLady || activeGentleman || activeChild) {
      return (
        <>
          <SectionProduct
            activeChild={activeChild}
            activeLady={activeLady}
            activeGentleman={activeGentleman}
          ></SectionProduct>
          <DivShowProduct></DivShowProduct>
        </>
      );
    } else if (activePurchaseHistory) {
      return <PurchaseHistory initPage={initPage}></PurchaseHistory>;
    } else {
      return null;
    }
  };

  const renderFooter = () => {
    if (activeNavPerfil) {
      return null;
    } else {
      return <Footer></Footer>;
    }
  };

  const renderNavOrNavPerfil = () => {
    if (!activeNavPerfil) {
      return (
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
          showNavPerfil={showNavPerfil}
        ></Nav>
      );
    } else {
      return (
        <NavPerfil
          showNavPerfil={showNavPerfil}
          showPurchaseHistory={showPurchaseHistory}
          showShop={showShop}
        ></NavPerfil>
      );
    }
  };

  return (
    <>
      <AuthenticationProvider>
        <BrowserRouter>
          <Header></Header>

          {renderNavOrNavPerfil()}

          {renderComponentSection()}

          {renderComponentMain()}

          {renderFooter()}

          {renderComponentForSectionMain()}
        </BrowserRouter>
      </AuthenticationProvider>
    </>
  );
};
