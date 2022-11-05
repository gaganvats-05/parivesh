import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

import "./index.css";

import { store } from "./store/index";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-4utpiwl7wai4et1g.us.auth0.com"
    clientId="d2elecAI8jrBmxvGMyj8T91ia1eGt4EH"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
