import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

reportWebVitals();
