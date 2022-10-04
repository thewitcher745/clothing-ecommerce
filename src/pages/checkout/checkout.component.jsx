import React from "react";
import { connect } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

function Checkout({ cartItems, cartTotalPrice }) {
  const emptyCartElement = (
    <div className="empty-cart">
      <ShoppingIcon className="cart-icon checkout" />
      Your shopping cart is empty. Add some items.
    </div>
  );

  const emptyTableRow = (
    <tr style={{ border: "none" }}>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );

  const checkoutTableElement = (
    <table>
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Description</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.length > 0
          ? cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
          : emptyTableRow}
      </tbody>
    </table>
  );

  return (
    <div className="checkout">
      <div className="checkout-cart-container">
        {checkoutTableElement}
        {cartItems.length > 0 ? <></> : emptyCartElement}
        <div className="total-price">TOTAL: ${cartTotalPrice}</div>
      </div>
      <div className="purchase-message">
        <span>*Please use the following test credit card for payments*</span>
        <span>4242 4242 4242 4242 - Exp: 01/20 - CVV2: 123</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartTotalPrice: selectCartItemsTotalPrice(state),
});

export default connect(mapStateToProps)(Checkout);
