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
import  userReducer from './redux/reducers/user'
import  checkAuthAction from './redux/Action/userAction'
import { Provider } from 'react-redux';
import axios from 'axios';


import createSagaMiddleware from "redux-saga";
import rootSaga from './redux/Saga/index'

//const middleware = [thunk];
const SagaMiddleware = createSagaMiddleware();
const middleware = [SagaMiddleware];

const allReducers = combineReducers({movies: movielistReducer, modal: modalReducer, user:userReducer})
const store = createStore(allReducers, compose( applyMiddleware(...middleware)));
<<<<<<< HEAD
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
=======
>>>>>>> 3f937429a7d5db560b85c85472b34b033634f93e
SagaMiddleware.run(rootSaga);





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
