import reportWebVitals from "./reportWebVitals";

import store from "./redux/state";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

reportWebVitals();
