import React from "react";
import { connect } from "react-redux";

import {
  removeCartItem,
  changeItemQuantity,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

function CheckoutItem({ item, incrementItem, decrementItem, removeItem }) {
  const { imageUrl, name, quantity, price } = item;

  return (
    <tr>
      <td>
        <div className="product-image">
          <img src={imageUrl} alt="Checkout item" />
        </div>
      </td>
      <td className="desc-field">
        <div>{name}</div>
      </td>
      <td className="quantity-field">
        <button
          className={`${quantity > 1 ? "" : "disabled"}`}
          onClick={() => decrementItem(item)}
        >
          &#10094;
        </button>
        {quantity}
        <button onClick={() => incrementItem(item)}>&#10095;</button>
      </td>
      <td className="price-field">${price}</td>
      <td className="remove-field" onClick={() => removeItem(item)}>
        <div style={{ cursor: "pointer", fontSize: "2.4rem" }}>×</div>
      </td>
    </tr>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeCartItem(item)),
  incrementItem: (item) => dispatch(changeItemQuantity(item, 1)),
  decrementItem: (item) => dispatch(changeItemQuantity(item, -1)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
