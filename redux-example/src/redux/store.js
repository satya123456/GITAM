import {  compose, createStore } from "redux";
import rootReducer from "./reducers"; // imports index.js if file is not mentioned

// any dispatch sent to store is intercepted by REDUX DEVTOOL
// for  time travel debugging
const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;