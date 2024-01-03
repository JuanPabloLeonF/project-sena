import { senaAppReducer } from "../reducer/senaAppReducer";
import { initialStatePageSenaApp } from "../models/initialStatePageSenaApp";
import { useContext, useReducer } from "react";
import { AuthenticationContext } from "../context/AuthenticationProvider";
import { getAllClientAdmin, getClientById } from "../services/clientServices";

export const useStateSenaApp = () => {
  const [state, dispatch] = useReducer(senaAppReducer, initialStatePageSenaApp);
  const { login, handlerLogout, handlerLoging } = useContext(
    AuthenticationContext
  );

  const normalizeClientData = (data) => {
    return {
      id: data.idClientDto || 0,
      name: data.nameClientDto || "",
      email: data.emailClientDto || "",
      phone: data.phoneClientDto || "",
      address: data.addressClientDto || "",
      identification: data.identificationDto || "",
      admin: data.adminClientDto || false,
      password: data.passwordClientDto || "",
      status: data.statusClientDto || true,
    };
  };

  const getClientByIdData = async (id) => {
    const data = await getClientById(id);
    const normalizedData = normalizeClientData(data);
    return normalizedData;
  };

  const dataClientById = async (id) => {
    const clientData = await getClientByIdData(id);
    dispatch({ type: "INIT_DATA_CLIENT", payload: clientData });
  };

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
    showSection("Main");
  };

  const showLoging = () => {
    dispatch({ type: "SHOW_LOGING" });
    state.ac;
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

  const showMainAdmin = () => {
    dispatch({ type: "SHOW_MAIN_ADMIN" });
    showSection("MainAdmin");
  };

  const showMainProductsSales = () => {
    dispatch({ type: "SHOW_MAIN_PRODUCTS_SALES" });
    showSection("MainProductsSales");
  };

  const setTotalPages = (totalPages) => {
    dispatch({
      type: "SET_TOTAL_PAGE_TABLE_ADMIN",
      payload: totalPages,
    });
  };

  const setCurrentPage = (currentPage) => {
    dispatch({
      type: "SET_CURRENT_PAGE_TABLE_ADMIN",
      payload: currentPage,
    });
  };

  const showDataAdmin = () => {
    dispatch({ type: "SHOW_DATA_ADMIN" });
  };

  const getDataAdmin = (data) => {
    dispatch({
      type: "DATA_ADMIN",
      payload: data,
    });
  };

  const updateMainAdmin = () => {
    dispatch({
      type: "UPDATE_COMPONENT_MAIN_ADMIN"
    });
  }; 

  const normalizeClientDataArray = (data) => {
    if (data && data.content && Array.isArray(data.content)) {
      return data.content.map((client) => ({
        id: client.idClientDto || 0,
        name: client.nameClientDto || "",
        email: client.emailClientDto || "",
        phone: client.phoneClientDto || "",
        address: client.addressClientDto || "",
        identification: client.identificationDto || "",
        admin: client.adminClientDto || false,
        password: client.passwordClientDto || "",
        status: client.statusClientDto || true,
      }));
    }
    return [];
  };

  const dataTableAdmin = async () => {
    const data = await getAllClientAdmin(state.currentPage - 1, 10);
    const arrayData = normalizeClientDataArray(data);
    setTotalPages(data.totalPages);
    dispatch({ type: "DATA_TABLE_ADMIN", payload: arrayData });
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
    dataClientById,
    showMainAdmin,
    setTotalPages,
    setCurrentPage,
    showDataAdmin,
    dataTableAdmin,
    getDataAdmin,
    updateMainAdmin,
    showMainProductsSales,
  };
};
