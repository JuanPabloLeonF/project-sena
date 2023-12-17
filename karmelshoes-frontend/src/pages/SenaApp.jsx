import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import { Section } from "../components/senaApp/Section";
import { useReducer } from "react";
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
import { senaAppReducer } from "../reducer/senaAppReducer";
import { initialStatePageSenaApp } from "../models/initialStatePageSenaApp";

import "/src/css/styleSenaApp.css";
import "/src/css/index.css";
import "/src/css/styleShop.css";

export const SenaApp = () => {
  const [state, dispatch] = useReducer(senaAppReducer, initialStatePageSenaApp);

  const initPage = () => {
    dispatch({ type: "INIT_PAGE" });
    showSection("Main");
  };

  const showSection = (section) => {
    dispatch({ type: "SET_ACTIVE_SECTION", payload: section });
  };

  const showBoy = () => {
    dispatch({ type: "SHOW_BOY" });
    showSection("Main");
  };

  const showLady = () => {
    dispatch({ type: "SHOW_LADY" });
    showSection("Main");
  };

  const showGentleman = () => {
    dispatch({ type: "SHOW_GENTLEMAN" });
    showSection("Main");
  };

  const showRegistrer = () => {
    dispatch({ type: "SHOW_REGISTRER" });
  };

  const showLoging = () => {
    dispatch({ type: "SHOW_LOGING" });
  };

  const showShoppingCart = () => {
    dispatch({ type: "SHOW_SHOPPING_CART" });
  };

  const showWhoWeAre = () => {
    dispatch({ type: "SHOW_WHO_WE_ARE" });
    showSection("WhoWeAre");
  };

  const showPurchaseHistory = () => {
    dispatch({ type: "SHOW_PURCHARSE_HISTORY" });
  };

  const showShop = () => {
    dispatch({ type: "SHOW_SHOP" });
    showSection("Shop");
  };

  const showNavPerfil = () => {
    dispatch({ type: "SHOW_NAV_PERFIL" });
    showSection("NavPerfil");
  };

  const renderComponentMain = () => {
    switch (state.activeSection) {
      case "Main":
        return <Main />;
      case "WhoWeAre":
        return <MainWhoWeAre />;
      case "Shop":
        return <MainShop />;
      case "NavPerfil":
        return <MainPerfil />;
      default:
        return <Main />;
    }
  };

  const renderComponentSection = () => {
    if (state.activeNavPerfil) {
      return null;
    } else if (!state.activeWhoWeAre) {
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
    switch (true) {
      case state.activeShoppingCart:
        return <ShoppingCart showShoppingCart={showShoppingCart} />;
      case state.activeLoging:
        return <MainLoging showLoging={showLoging} />;
      case state.activeRegistrer:
        return <MainRegistration showRegistrer={showRegistrer} />;
      case state.activeLady || state.activeGentleman || state.activeChild:
        return (
          <>
            <SectionProduct
              activeChild={state.activeChild}
              activeLady={state.activeLady}
              activeGentleman={state.activeGentleman}
            />
            <DivShowProduct />
          </>
        );
      case state.activePurchaseHistory:
        return <PurchaseHistory initPage={initPage} />;
      default:
        return null;
    }
  };

  const renderFooter = () => {
    if (state.activeNavPerfil) {
      return null;
    } else {
      return <Footer />;
    }
  };

  const renderNavOrNavPerfil = () => {
    if (!state.activeNavPerfil) {
      return (
        <Nav
          initPage={initPage}
          showShoppingCart={showShoppingCart}
          showLady={showLady}
          showGentleman={showGentleman}
          showBoy={showBoy}
          activeChild={state.activeChild}
          activeLady={state.activeLady}
          activeGentleman={state.activeGentleman}
          showWhoWeAre={showWhoWeAre}
          showShop={showShop}
          showPurchaseHistory={showPurchaseHistory}
          activeWhoWeAre={state.activeWhoWeAre}
          activeShop={state.activeShop}
          activePurchaseHistory={state.activePurchaseHistory}
          showNavPerfil={showNavPerfil}
        />
      );
    } else {
      return (
        <NavPerfil
          showNavPerfil={showNavPerfil}
          showPurchaseHistory={showPurchaseHistory}
          showShop={showShop}
          initPage={initPage}
        />
      );
    }
  };

  return (
    <>
      <AuthenticationProvider>
        <BrowserRouter>
          <Header />
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
