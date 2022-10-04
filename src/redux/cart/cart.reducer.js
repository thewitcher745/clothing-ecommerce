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

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "CHANGE_ITEM_QUANTITY":
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload.item.id
      );

      if (findItem.quantity <= 1 && action.payload.delta < 0) {
        // If item quantity reaches zero after decrement, don't do anything
        return state;
      }

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.item.id
            ? { ...item, quantity: item.quantity + action.payload.delta }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
