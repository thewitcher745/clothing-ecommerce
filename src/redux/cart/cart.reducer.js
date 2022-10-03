const INITIAL_STATE = {
  isShowing: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return {
        ...state,
        isShowing: !state.isShowing,
      };

    default:
      return state;
  }
};

export default cartReducer;
