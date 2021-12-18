import reportWebVitals from "./reportWebVitals";

import store from "./redux/redux-store";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "./StoreContext";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});
rerenderEntireTree(store.getState());

reportWebVitals();
