import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./App";

const root = document.getElementById("root");
const rootEle = ReactDOM.createRoot(root);
rootEle.render(
  <Provider store={store}>
    <App />
  </Provider>
);
