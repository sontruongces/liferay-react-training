import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./components/redux/store/store";

const root = document.getElementById("root");
const rootEle = ReactDOM.createRoot(root);
rootEle.render(
  <Provider store={store}>
    <App />
  </Provider>
);
