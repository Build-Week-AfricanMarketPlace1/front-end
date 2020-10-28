import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import userReducer from './state/reducers/userReducer'
import thunk from 'redux-thunk'


const store = createStore(userReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
