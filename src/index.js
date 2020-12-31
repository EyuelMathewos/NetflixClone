import React from "react";
// import { render } from 'react-dom';
// import { SiderDemo } from './components/dashboard';
// import {Login} from './components/login';
import Main from './route';
// import App from './components/dashroute';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import movielistReducer from './redux/reducers/movieReducer';
import  modalReducer from './redux/reducers/modal'
import { Provider } from 'react-redux';
const middleware = [thunk];

const allReducers = combineReducers({movies: movielistReducer, modal: modalReducer})
const store = createStore(allReducers, compose( applyMiddleware(...middleware)));

store.subscribe(()=>{
  console.log(store.getState())
})
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>

      <Main/>

  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  );