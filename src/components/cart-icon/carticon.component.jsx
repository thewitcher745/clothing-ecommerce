import React from "react";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/cart.actions.js";

function CartIcon({ cartItems, toggleCartDropdown }) {
  const totalCartItems = cartItems.reduce(
    (sum, item) => item.quantity + sum,
    0
  );
  console.log(totalCartItems);
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCartItems}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
