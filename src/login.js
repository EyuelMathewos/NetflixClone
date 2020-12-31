import React, { Component } from "react";
import  {  Nav, NavBrand, FormInput, FullImage }  from  "./components/Container";
import {Button} from "./components/Button";
import netflixlogo from './components/img/netflixlogonew.png';


export class login extends React.Component {
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
<h1>Sign in</h1>
<form>
<FormInput type="text" placeholder="Email or Phone number"/>
<FormInput type="password" placeholder="Password"/>
<Button fullwidth>Sign in</Button>
<diV style={{"display":"flex"}}>
<FormInput checkbox type="checkbox"/>
<p>Remember me</p>
</diV>

</form>
</div>


</div>
</FullImage>
    );

        
    
  }
}