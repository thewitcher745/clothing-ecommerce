import React, { useEffect, useContext } from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { SignInContext } from "./contexts/SignInContext";
import { setCurrentUser } from "./redux/user/user.actions";
import Checkout from "./pages/checkout/checkout.component";

function App({ currentUser, setCurrentUser }) {
  const { setIsLoadingUser } = useContext(SignInContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        setIsLoadingUser(true);
        const userRef = await createUserProfileDocument(userAuth);
        setCurrentUser((await getDoc(userRef)).data());
        setIsLoadingUser(false);
      }
    });

    return unsubscribe; // Return statement of a useEffect hook is similar to ComponentWillUnmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />}
        />
        <Route path="/checkout" element={<Checkout />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
