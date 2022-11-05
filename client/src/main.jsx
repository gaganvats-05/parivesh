import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

import "./index.css";

import { store } from "./store/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider>
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
