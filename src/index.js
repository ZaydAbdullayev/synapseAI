import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./assets/global.css";
import "./assets/root.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Provider } from "react-redux";
import { store } from "./context/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </Fragment>
);
