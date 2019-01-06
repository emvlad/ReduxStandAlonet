import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
//import FunctClasName from 'source/folder-name/file-name'
import App from "./components/app";

//create the main-sky-storage
import { createStore } from "redux";
import allReducers from "./reducers";

import { Provider } from "react-redux";

//storage-data are all collections or reducers-combined in oneStore
const store = createStore(allReducers);
//sky-store-done

//pass the sky-store to the reactDom rendered like any component
//1-import and make provider
ReactDOM.render(
  //The PROVIDER is a new root component with to
  //make the store available for all container-data-components accessible
<Provider store={store}>
<App /> 
</Provider>, document.getElementById("root"));
