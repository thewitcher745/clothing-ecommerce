import React, { useState, useEffect, useRef } from "react";
import { Routes as Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);

      createUserProfileDocument(user, 1);
    });
  });

  return (
    <div>
      {currentUser ? <label>{currentUser.name}</label> : null}
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Switch>
    </div>
  );
}

export default App;
