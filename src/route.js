import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import  { home }  from "./components/home";
import  { home2 }  from "./components/home2";
import { listview } from "./listview";
import  {RightList}  from "./list";
const Main = () => (
  <main>
    
    <Switch>
      <Route exact path="/" component={home}/>
      <Route exact path="/home" component={home2}/>
      <Route path="/list" component={listview}/>
      <Route path="/listview" component={RightList}/>
    </Switch>
  </main>
  
  
);

export default Main;
