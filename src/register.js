import React, { Component } from "react";
import  {  ATag, Nav, NavBrand, FormInput, FullImage }  from  "./components/Container";
import {Button} from "./components/Button";
import netflixlogo from './components/img/netflixlogonew.png'

export class register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
         }

  render() { 
    
    return(
      <FullImage>
<div style={{"position":"relative","height":"800px"}}>

<Nav secondary><NavBrand src={netflixlogo}></NavBrand></Nav>

<div style={{"margin":"80px auto","padding":"60px 68px 40px","background-color":"#000000bf","color":"#fff","max-width":"314px","min-height":"350px"}}>
<h1>Sign up</h1>
<form>
<FormInput type="text" placeholder="username"/>
<FormInput type="text" placeholder="Email or Phone number"/>
<FormInput type="password" placeholder="Password"/>
<FormInput type="password" placeholder="confirm Password"/>
<Button fullwidth>Sign Up</Button>
<div style={{"display":"flex"}}>

<p style={{"color":"#737373"}}>Already have an account ? <ATag href="/signin"> Sign In Now.</ATag></p>

</div>

</form>
</div>


</div>
</FullImage>
    );

        
    
  }
}