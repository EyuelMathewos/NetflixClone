import React from "react";
import Main from './route';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import movielistReducer from './redux/reducers/movieReducer';
import  modalReducer from './redux/reducers/modal'
import  userReducer from './redux/reducers/user'
import { Provider } from 'react-redux';


import createSagaMiddleware from "redux-saga";
import rootSaga from './redux/Saga/index'

//const middleware = [thunk];
const SagaMiddleware = createSagaMiddleware();
const middleware = [SagaMiddleware];

const allReducers = combineReducers({movies: movielistReducer, modal: modalReducer, user:userReducer})
const store = createStore(allReducers, compose( applyMiddleware(...middleware)));
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
