export const senaAppReducer = (state = {}, action) => {
  switch (action.type) {
    case "INITIAL_PAGE":
      return {
        ...state,
        activeSection: action.payload,
      };

    case "TOGGLE_SHOPPING_CART":
      return {
        ...state,
        activeShoppingCart: !state.activeShoppingCart,
      };
    default:
      return state;
  }
};
