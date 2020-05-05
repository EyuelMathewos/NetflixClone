import React from "react";
// import { render } from 'react-dom';
// import { SiderDemo } from './components/dashboard';
// import {Login} from './components/login';
import Main from './route';
// import App from './components/dashroute';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
      <Main/>
  </BrowserRouter>,
  document.getElementById('root')
  );