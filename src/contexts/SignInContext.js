import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebase.utils";

export const SignInContext = createContext();

export function SignInProvider(props) {
  const [currentUser, setCurrentUser] = useState();

  const [isLoadingUser, setIsLoadingUser] = useState(false);

  function signOut() {
    auth.signOut();
    setCurrentUser(null);
  }

  return (
    <SignInContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signOut,
        isLoadingUser,
        setIsLoadingUser,
      }}
    >
      {props.children}
    </SignInContext.Provider>
  );
}
