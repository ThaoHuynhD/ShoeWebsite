import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./Layout/reducer/rootReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

export let showList =()=>{
  document.getElementById("productList").classList.add("active");
  document.getElementById("productCart").classList.remove("active");
}
export let showCart =()=>{
  document.getElementById("productList").classList.remove("active");
  document.getElementById("productCart").classList.add("active");
}
