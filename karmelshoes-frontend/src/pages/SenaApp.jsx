import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import { Section } from "../components/senaApp/Section";
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
import { useStateSenaApp } from "../hooks/useStateSenaApp";

import "/src/css/styleSenaApp.css";
import "/src/css/index.css";
import "/src/css/styleShop.css";
import { useEffect } from "react";

export const SenaApp = () => {
  const {
    handlerLoging,
    handlerLogout,
    login,
    state,
    initPage,
    showBoy,
    showLady,
    showGentleman,
    showRegistrer,
    showLoging,
    showShoppingCart,
    showWhoWeAre,
    showPurchaseHistory,
    showShop,
    showNavPerfil,
    dataClient,
  } = useStateSenaApp();

  const {
    id,
    name,
    email,
    phone,
    address,
    identification,
    status,
    admin,
    password,
  } = state.clienteOrAdmin;

  useEffect(() => {
    if (login.user) {
      dataClient(login.user.name);
    }
  }, [login.user]);

  const renderComponentMain = () => {
    switch (state.activeSection) {
      case "Main":
        return <Main />;
      case "WhoWeAre":
        return <MainWhoWeAre />;
      case "Shop":
        return <MainShop />;
      case "NavPerfil":
        return <MainPerfil login={login} dataClient={state.clienteOrAdmin} />;
      default:
        return <Main />;
    }
  };

  const renderComponentSection = () => {
    if (state.activeNavPerfil || state.activeShop) {
      return <section></section>;
    } else if (!state.activeWhoWeAre) {
      return (
        <Section
          handlerLogout={handlerLogout}
          login={login}
          name={name}
          showLoging={showLoging}
          showRegistrer={showRegistrer}
        ></Section>
      );
    }
  };

  const renderComponentForSectionMain = () => {
    switch (true) {
      case state.activeShoppingCart:
        return <ShoppingCart showShoppingCart={showShoppingCart} />;
      case state.activeLoging:
        return (
          <MainLoging handlerLoging={handlerLoging} showLoging={showLoging} />
        );
      case state.activeRegistrer:
        return (
          <MainRegistration
            showLoging={showLoging}
            showRegistrer={showRegistrer}
            login={login}
          />
        );
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
          showPurchaseHistory={showPurchaseHistory}
          showShop={showShop}
          initPage={initPage}
        />
      );
    }
  };

  return (
    <>
      <Header />
      {renderNavOrNavPerfil()}
      {renderComponentSection()}
      {renderComponentMain()}
      {renderFooter()}
      {renderComponentForSectionMain()}
    </>
  );
};
