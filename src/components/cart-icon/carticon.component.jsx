import React from "react";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

function CartIcon({ totalCartItems, toggleCartDropdown }) {
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
  totalCartItems: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
