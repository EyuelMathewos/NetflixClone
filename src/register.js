import React, { Component } from "react";
import  {  ATag, Nav, NavBrand, FormInput, FullImage }  from  "./components/Container";
import {Button} from "./components/Button";
import netflixlogo from './components/img/netflixlogonew.png'
import UserService from "./service/UserServices";
let values={};
export class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email
      });
    } else {
      this.setState({
        emailError: true
      });
    }
  }

  handleChange(e) {
    if (e.target.name === "username") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({
          usernameError: true
        });
      } else {
        this.setState({
          usernameError: false,
          username: e.target.value
        });
      }
    }

    if (e.target.name == "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.name === "password") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({
          passwordError: true
        });
      } else {
        this.setState({
          passwordError: false,
          password: e.target.value
        });
      }
    }
    if (e.target.name === "confirmPassword") {
      if (this.state.password.localeCompare(e.target.value) === 0) {
        this.setState({
          confirmPasswordError: false,
          confirmPassword: e.target.value
        });
      } else {
        this.setState({
          confirmPasswordError: true
        });
      }
    }
    if (
      this.state.usernameError === false &&
      this.state.emailError === false &&
      this.state.passwordError === false
    ) {
      this.setState({
        isFormValid: true
      });
    } else {
      this.setState({
        isFormValid: false
      });
    }

    console.log("state :");
    console.log(this.state);
  }

    
    handleSubmit = (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        //let values={};
        for (let [key, value] of data) {
          //  console.log(key +":"+ value);
          values[key] = value;
          //console.log(values);
        }
        

        
        if( this.state.isFormValid && (this.state.password === this.state.confirmPassword) ){
           
            UserService.register( values )
           .then(response => {
             console.log("*****you Registered*****")
             console.log(response)
           })
           .catch(error => {
             console.log("Incorrect username or password");
           });
        
            
        }
        
        
        
        
     };

  render() { 
    
    return(
      <FullImage>
<div style={{"position":"relative","height":"800px"}}>

<Nav secondary><NavBrand src={netflixlogo}></NavBrand></Nav>

<div style={{"margin":"80px auto","padding":"60px 68px 40px","background-color":"#000000bf","color":"#fff","max-width":"314px","min-height":"350px"}}>
<h1>Sign up</h1>
<form onSubmit={this.handleSubmit}>
<FormInput type="text"  name="username" placeholder="username" onChange={this.handleChange}/>
{this.state.usernameError && (
  <span style={{ color: "red", margin: "0 0.5em" }}>
  Please Enter valid username
  </span>
)}
<FormInput type="text" name="email" placeholder="Email or Phone number" onChange={this.handleChange}/>
  {this.state.emailError && (
     <span style={{ color: "red", margin: "0 0.5em" }}>
     Please Enter valid email address
     </span>
  )}
<FormInput type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
  {this.state.passwordError && (
      <span style={{ color: "red", margin: "0 0.5em" }}>
      Please Enter valid password
      </span>
   )}
<FormInput type="password" name="confirmPassword" placeholder="confirm Password" onChange={this.handleChange}/>
   {this.state.confirmPasswordError && (
     <span style={{ color: "red", margin: "0 0.5em" }}>
     Please Enter correct confirmation password
     </span>
   )}
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
