import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./sign-in-out-links.styles.scss";

import { SignInContext } from "../../contexts/SignInContext";

function ProfileLink() {
  const { currentUser, signOut, isLoadingUser } = useContext(SignInContext);
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

export default ProfileLink;
