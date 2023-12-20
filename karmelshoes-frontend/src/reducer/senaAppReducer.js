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
        activeRegistrer:false,
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
      };
    default:
      return state;
  }
};
