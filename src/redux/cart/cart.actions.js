export const toggleCartDropdown = () => ({ type: "TOGGLE_CART_DROPDOWN" });

export const addCartItem = (item) => ({ type: "ADD_ITEM", payload: item });

export const removeCartItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const changeItemQuantity = (item, delta) => ({
  type: "CHANGE_ITEM_QUANTITY",
  payload: { item, delta },
});

export const resetCart = () => ({ type: "RESET_CART" });
