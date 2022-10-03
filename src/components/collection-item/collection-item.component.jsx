import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

function CollectionItem({ item, addCartItem }) {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => addCartItem({ id, name, price, imageUrl })}
      >
        Add to cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
