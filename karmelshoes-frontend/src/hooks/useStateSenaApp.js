import { senaAppReducer } from "../reducer/senaAppReducer";
import { initialStatePageSenaApp } from "../models/initialStatePageSenaApp";
import { useContext, useReducer } from "react";
import { AuthenticationContext } from "../context/AuthenticationProvider";

export const useStateSenaApp = () => {
  const [state, dispatch] = useReducer(senaAppReducer, initialStatePageSenaApp);
  const { login, handlerLogout, handlerLoging } = useContext(AuthenticationContext);

  const initPage = () => {
    dispatch({ type: "INIT_PAGE" });
    showSection("Main");
  };

  const showSection = (section) => {
    dispatch({ type: "SET_ACTIVE_SECTION_MAIN", payload: section });
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
    showSection("Main");
  };

  const showWhoWeAre = () => {
    dispatch({ type: "SHOW_WHO_WE_ARE" });
    showSection("WhoWeAre");
  };

  const showPurchaseHistory = () => {
    dispatch({ type: "SHOW_PURCHARSE_HISTORY" });
    showSection("Main");
  };

  const showShop = () => {
    dispatch({ type: "SHOW_SHOP" });
    showSection("Shop");
  };

  const showNavPerfil = () => {
    dispatch({ type: "SHOW_NAV_PERFIL" });
    showSection("NavPerfil");
  };

  return {
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
  }
};
