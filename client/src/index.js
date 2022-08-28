import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import Reducers from './reducers/index'
import thunk from 'redux-thunk';


const store = createStore(Reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


