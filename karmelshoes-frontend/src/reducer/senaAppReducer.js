export const senaAppReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_SECTION_MAIN":
      return {
        ...state,
        activeSection: action.payload,
      };
    case "SHOW_SHOPPING_CART":
      return {
        ...state,
        activeShoppingCart: !state.activeShoppingCart,
      };
    case "SHOW_BOY":
      return {
        ...state,
        activeChild: true,
        activeLady: false,
        activeGentleman: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_LADY":
      return {
        ...state,
        activeLady: true,
        activeChild: false,
        activeGentleman: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_GENTLEMAN":
      return {
        ...state,
        activeGentleman: true,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_REGISTRER":
      return {
        ...state,
        activeRegistrer: !state.activeRegistrer,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_LOGING":
      return {
        ...state,
        activeLoging: !state.activeLoging,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeRegistrer: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_WHO_WE_ARE":
      return {
        ...state,
        activeWhoWeAre: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_PURCHARSE_HISTORY":
      return {
        ...state,
        activePurchaseHistory: true,
        activeWhoWeAre: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_SHOP":
      return {
        ...state,
        activeShop: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_NAV_PERFIL":
      return {
        ...state,
        activeNavPerfil: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeShop: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_MAIN_ADMIN":
      return {
        ...state,
        activeMainAdmin: true,
        activeNavPerfil: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeShop: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_DATA_ADMIN":
      return {
        ...state,
        activeDataAdmin: !state.activeDataAdmin,
        activeMainAdmin: true,
        activeNavPerfil: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeShop: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
      };
    case "SHOW_DATA_PRODUCT":
      return {
        ...state,
        activeDataProduct: !state.activeDataProduct,
        activeDataAdmin: false,
        activeMainAdmin: false,
        activeNavPerfil: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeShop: false,
        activeMainProductsSales: true,
      };
    case "INIT_PAGE":
      return {
        ...state,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeDataProduct: false,
        activeMainProductsSales: false,
      };
    case "SHOW_MAIN_PRODUCTS_SALES":
      return {
        ...state,
        activeMainProductsSales: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
      };

    case "INIT_DATA_CLIENT":
      return {
        ...state,
        clienteOrAdmin: {
          ...state.clienteOrAdmin,
          ...action.payload,
        },
      };
    case "SET_TOTAL_PAGE_TABLE_ADMIN":
      return {
        ...state,
        totalPages: action.payload,
      };
    case "SET_TOTAL_PAGE_TABLE_PRODUCT":
      return {
        ...state,
        totalPagesProduct: action.payload,
      };
    case "DATA_TABLE_ADMIN":
      return {
        ...state,
        dataTableAdmin: action.payload,
      };
    case "DATA_TABLE_PRODUCT":
      return {
        ...state,
        dataTableProduct: action.payload,
      };
    case "DATA_ADMIN":
      return {
        ...state,
        dataAdmin: action.payload,
      };
    case "DATA_PRODUCT":
      return {
        ...state,
        dataProduct: action.payload,
      };
    case "SET_CURRENT_PAGE_TABLE_ADMIN":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_CURRENT_PAGE_TABLE_PRODUCT":
      return {
        ...state,
        currentPageProduct: action.payload,
      };
    case "UPDATE_COMPONENT_MAIN_ADMIN":
      return {
        ...state,
        updateMainAdmin: !state.updateMainAdmin,
      };
    default:
      return state;
  }
};
