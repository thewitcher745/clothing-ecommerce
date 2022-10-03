import React, { createContext, useState } from "react";

export const SignInContext = createContext();

export function SignInProvider(props) {
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  return (
    <SignInContext.Provider
      value={{
        isLoadingUser,
        setIsLoadingUser,
      }}
    >
      {props.children}
    </SignInContext.Provider>
  );
}
