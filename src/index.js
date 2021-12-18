import reportWebVitals from "./reportWebVitals";

import state, { subscribe } from "./redux/state";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
subscribe(rerenderEntireTree)
rerenderEntireTree();

reportWebVitals();
