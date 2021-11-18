import React, { Component } from "react";
import  {  Nav, NavBrand, FormInput, FullImage }  from  "./components/Container";
import {Button} from "./components/Button";
import netflixlogo from './components/img/netflixlogonew.png';
import UserService from "./service/UserServices";
import ClientSession from "./service/ClientSession";
import { connect } from 'react-redux';
import signinAction from './redux/Action/userAction';
import jwt from "jsonwebtoken";
import checkauth from './service/auth';
let values={};

class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: false
        };
         }
         
        componentWillMount() {
          
          if(checkauth()){
            window.location="/"
          }
        }

         handleSubmit = e => {
          e.preventDefault();
          let data = new FormData(e.target);
          //let values={};
            for (let [key, value] of data) {

              //  console.log(key +":"+ value);
               values[key]=value
              //  console.log(values)
              
           }
if(values.email!="" && values.password!=""){
  UserService.login(values.email, values.password)
  .then(response => {
    console.log("*****you singin*****")
    console.log(response)
    if(response.success == true){
     let encrypt = jwt.sign(
       response,
       "shhhhh"
     );

      //localStorage.setItem("authorized","true");
      localStorage.setItem("cuid",encrypt);
      window.location="/"
    }else{
      this.setState({message: true})
      console.log("this is the message"+this.state.message)
    }


    //this.props.signinAction(true)
  })
  .catch(error => {
    console.log("Incorrect username or password");
  });
}

        }

  render() { 
    
    return(
      <FullImage>
<div style={{"position":"relative","height":"800px"}}>

<Nav secondary><NavBrand src={netflixlogo}></NavBrand></Nav>

<div style={{"margin":"80px auto","padding":"60px 68px 40px","background-color":"#000000bf","color":"#fff","max-width":"314px","min-height":"350px"}}>
<h1>Sign in</h1>
<form onSubmit={this.handleSubmit}>
{this.state.message&&<div style={{"position":"relative","height":"auto", "padding":"10px 20px","border-radius":"4px","margin":"0.5em" ,"backgroundColor":"#e87c03","font-size":"14px"}}>
<p style={{"fontSize":"0.9em"}}>Sorry, we can't find an account with this email address. Please try again or create a new account</p>
</div>}
<FormInput type="text" name="email" placeholder="Email or Phone number"/>
<FormInput type="password" name="password" placeholder="Password"/>
<Button fullwidth type="submit">Sign in</Button>
<div style={{"display":"flex"}}>
<FormInput checkbox type="checkbox"/>
<p>Remember me</p>
</div>

</form>
</div>


</div>
</FullImage>
    );

        
    
  }
}
const MapStateToProps = (state) => {
  return {
    modal: state.modal
};
};
const MapDispatchToProps = (dispatch) => {
  return{
    signinAction: (m)=> dispatch(signinAction(m))
  }
    
  
};
export default connect(MapStateToProps, MapDispatchToProps)(login);