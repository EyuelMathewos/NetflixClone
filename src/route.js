import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import  { home }  from "./components/home";
import  { home2 }  from "./components/home2";
import { listview } from "./listview";
import  {RightList}  from "./list";
import  {login}  from "./login";
import {register} from "./register";
import {watch} from "./watch"
const Main = () => (
  <main>
    
    <Switch>
      <Route exact path="/" component={home2}/>
      <Route exact path="/home" component={home2}/>
      <Route path="/list" component={listview}/>
      <Route path="/listview" component={RightList}/>
      <Route path="/signin" component={login}/>
      <Route path="/signup" component={register}/>
      <Route path="/watch/:id" component={watch}/>
    </Switch>
  </main>
  
  
);

export default Main;
