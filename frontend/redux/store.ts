import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux"
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";
import { createWrapper, MakeStore } from "next-redux-wrapper";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

const makeStore: MakeStore<{}> = () => {
  return createStore(rootReducer, {}, bindMiddleware([thunkMiddleware]))
}


export const wrapper = createWrapper<{}>(makeStore, {debug: true});