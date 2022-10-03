import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SignInProvider } from "./contexts/SignInContext";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SignInProvider>
        <App />
      </SignInProvider>
    </BrowserRouter>
  </Provider>
);
