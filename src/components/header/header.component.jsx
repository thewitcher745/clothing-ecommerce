import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/carticon.component";

import "./header.styles.scss";
import ProfileLink from "./sign-in-out-link.component.";

function Header({ isShowing }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <ProfileLink />
        <CartIcon />
        {isShowing ? <CartDropdown /> : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isShowing: state.cart.isShowing,
});

export default connect(mapStateToProps, null)(Header);
