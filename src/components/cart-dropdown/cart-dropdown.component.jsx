import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import EmptyCart from "../empty-cart/empty-cart.component";

import "./cart-dropdown.styles.scss";

function CartDropdown({ cartItems }) {
  const navigate = useNavigate();

  const cartItemsElement = (
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
  const emptyCartElement = <EmptyCart />;

  return (
    <div className="cart-dropdown">
      {cartItems.length > 0 ? cartItemsElement : emptyCartElement}
      <CustomButton onClick={() => navigate(`/checkout`)}>
        CHECKOUT
      </CustomButton>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, null)(CartDropdown);
