import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";
import { store } from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
