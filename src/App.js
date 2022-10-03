import React, { useEffect, useContext } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { getDoc } from "firebase/firestore";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { SignInContext } from "./contexts/SignInContext";

function App() {
  const { setCurrentUser, setIsLoadingUser } = useContext(SignInContext);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        setIsLoadingUser(true);
        const userRef = await createUserProfileDocument(userAuth);
        setCurrentUser((await getDoc(userRef)).data(), setIsLoadingUser(false));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* {currentUser ? <label>{currentUser.name}</label> : null} */}
      <Header />
      <Switch>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Switch>
    </div>
  );
}

export default App;
