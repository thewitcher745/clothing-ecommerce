const INITIAL_STATE = {
  isShowing: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return {
        ...state,
        isShowing: !state.isShowing,
      };

    case "ADD_ITEM":
      const existingItems = state.cartItems.filter(
        (item) => item.id === action.payload.id
      );
      if (existingItems.length === 0)
        // If item isn't already in cartItems, create new cart item
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      else {
        // Else add 1 to the existing cart item
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
