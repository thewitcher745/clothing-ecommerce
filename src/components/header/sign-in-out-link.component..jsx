import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./sign-in-out-links.styles.scss";

import { SignInContext } from "../../contexts/SignInContext";
import { signOut } from "../../redux/user/user.actions";

function ProfileLink({ currentUser, signOut }) {
  const { isLoadingUser } = useContext(SignInContext);
  const signInLinks = currentUser ? (
    <div className="profile-link-container">
      <Link className="sign-option" to="/profile">
        {currentUser.displayName}
      </Link>
      <div className="sign-out sign-option" onClick={() => signOut()}>
        SIGN OUT
      </div>
    </div>
  ) : (
    <Link className="option" to="/signin">
      SIGN IN
    </Link>
  );
  return <>{isLoadingUser ? <div>LOADING USER</div> : signInLinks}</>;
}

const mapStateToProps = (state) => {
  console.log(state);
  return { currentUser: state.user.currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLink);
