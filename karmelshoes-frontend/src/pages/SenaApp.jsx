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
import { useEffect } from "react";

import "/src/css/styleSenaApp.css";
import "/src/css/index.css";
import "/src/css/styleShop.css";

import { MainAdmin } from "../components/mainAdmin/MainAdmin";
import { FooterAdmin } from "../components/mainAdmin/FooterAdmin";
import { SectionAdmin } from "../components/mainAdmin/SectionAdmin";
import { NavConfiguration } from "../components/senaApp/NavConfiguration";
import { SectionDataAdmin } from "../components/mainAdmin/SectionDataAdmin";
import { MainProductsSales } from "../components/mainProductsSales/MainProductsSales";

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
    dataClientById,
    showMainAdmin,
    setTotalPages,
    setCurrentPage,
    showDataAdmin,
    dataTableAdmin,
    getDataAdmin,
    updateMainAdmin,
    showMainProductsSales,
  } = useStateSenaApp();

  const dataAdmin = {};

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
      dataClientById(login.user.clientId);
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
        return (
          <MainPerfil
            showMainAdmin={showMainAdmin}
            login={login}
            dataClientById={dataClientById}
            dataClientOrAdmin={state.clienteOrAdmin}
            showMainProductsSales={showMainProductsSales}
          />
        );
      case "MainAdmin":
        return (
          <MainAdmin
            forcerRender={state.updateMainAdmin}
            getDataAdmin={getDataAdmin}
            dataTable={state.dataTableAdmin}
            dataTableAdmin={dataTableAdmin}
            currentPage={state.currentPage}
            setTotalPages={setTotalPages}
            showDataAdmin={showDataAdmin}
          />
        );
      case "MainProductsSales":
        return <MainProductsSales />;
      default:
        return <Main />;
    }
  };

  const renderComponentSection = () => {
    if (state.activeShop || state.activeNavPerfil) {
      return <section></section>;
    } else if (state.activeMainAdmin || state.activeMainProductsSales) {
      return (
        <SectionAdmin
          showRegistrer={showRegistrer}
          activeMainProductsSales={state.activeMainProductsSales}
        />
      );
    } else if (!state.activeWhoWeAre) {
      return (
        <Section
          handlerLogout={handlerLogout}
          login={login}
          name={name}
          showLoging={showLoging}
          showRegistrer={showRegistrer}
        />
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
      case state.activeDataAdmin:
        return (
          <SectionDataAdmin
            updateMainAdmin={updateMainAdmin}
            dataTableAdmin={dataTableAdmin}
            showDataAdmin={showDataAdmin}
            dataAdmin={state.dataAdmin}
            id={id}
          />
        );
      default:
        return null;
    }
  };

  const renderFooter = () => {
    if (state.activeMainAdmin) {
      return (
        <FooterAdmin
          currentPage={state.currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={state.totalPages}
        />
      );
    } else if (state.activeNavPerfil) {
      return null;
    } else if (state.activeMainProductsSales) {
      return <footer></footer>;
    } else {
      return <Footer />;
    }
  };

  const renderNav = () => {
    if (state.activeMainAdmin || state.activeMainProductsSales) {
      return (
        <NavConfiguration
          initPage={initPage}
          showNavPerfil={showNavPerfil}
          showMainAdmin={showMainAdmin}
          activeMainProductsSales={state.activeMainProductsSales}
          showMainProductsSales={showMainProductsSales}
        />
      );
    } else if (state.activeNavPerfil) {
      return (
        <NavPerfil
          showPurchaseHistory={showPurchaseHistory}
          showShop={showShop}
          initPage={initPage}
        />
      );
    } else {
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
          login={login}
        />
      );
    }
  };

  return (
    <>
      <Header />
      {renderNav()}
      {renderComponentSection()}
      {renderComponentMain()}
      {renderFooter()}
      {renderComponentForSectionMain()}
    </>
  );
};
