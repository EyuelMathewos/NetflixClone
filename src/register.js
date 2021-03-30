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
    
    handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        //let values={};
        for (let [key, value] of data) {
          //  console.log(key +":"+ value);
          values[key] = value;
          console.log(values);
        }
        
        UserService.register( values )
           .then(response => {
             console.log("*****you Registered*****")
             console.log(response)
           })
           .catch(error => {
             console.log("Incorrect username or password");
           });
        
        
        
     };

  render() { 
    
    return(
      <FullImage>
<div style={{"position":"relative","height":"800px"}}>

<Nav secondary><NavBrand src={netflixlogo}></NavBrand></Nav>

<div style={{"margin":"80px auto","padding":"60px 68px 40px","background-color":"#000000bf","color":"#fff","max-width":"314px","min-height":"350px"}}>
<h1>Sign up</h1>
<form onSubmit={this.handleSubmit}>
<FormInput type="text"  name="username" placeholder="username"/>
<FormInput type="text" name="email" placeholder="Email or Phone number"/>
<FormInput type="password" name="password" placeholder="Password"/>
<FormInput type="password" placeholder="confirm Password"/>
<Button fullwidth type="submit">Sign Up</Button>
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
