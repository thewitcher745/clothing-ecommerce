import React from "react";

import "./empty-cart.styles.scss";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <span className="empty-text">
        Your cart is empty! Add some item from the shop page.
      </span>
    </div>
  );
}

export default EmptyCart;
