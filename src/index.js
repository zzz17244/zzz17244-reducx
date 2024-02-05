import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { legacy_createStore as createStore, combineReducers } from 'redux';
import { cloneDeep } from './helpers/utility';
import { Provider } from 'react-redux';

const userReducer = (state = { username: '', userImg: null }, action) => {

  if (action.type === 'LOGIN') {
    const newState = cloneDeep(state);
    newState.user.username = action.payload.username;
    newState.user.userImg = action.payload.userImg;
    return newState
  }

  return state;
}

const cartReducer = (state = { itemList: [] }, action) => {

  if (action.type === 'ADD_TO_CART') {
    const newState = cloneDeep(state);
    newState.cart.itemList.push(action.payload.item);
    return newState;
  }

  return state;
}

const storeReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

const store = createStore(storeReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
