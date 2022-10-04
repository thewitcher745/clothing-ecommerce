import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../../redux/cart/cart.actions";
// import {  }
import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

function CollectionItem({ item, addCartItem, currentUser }) {
  const { name, price, imageUrl } = item;
  const navigate = useNavigate();

  function addToCartHandler() {
    console.log(currentUser);
    if (currentUser) addCartItem(item);
    else navigate("/signin");
  }

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
      <CustomButton inverted onClick={addToCartHandler}>
        Add to cart
      </CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
