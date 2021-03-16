import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import  { home }  from "./components/home";
import  { home2 }  from "./components/home2";
import { listview } from "./listview";
import  {RightList}  from "./list";
import  login  from "./login";
import {register} from "./register";
import {watch} from "./watch"
import { connect } from 'react-redux';
import reqAuthAction from './redux/Action/userAction';
import axios from 'axios';
//import PrivateRoute from './privateRoute.js'
var session = require('browser-session-store')
let authStatus;


// const PrivateRoute = ({component: Component, ...rest}) =>(

//   <Route {...rest} render={(props)=>(
//    //need to auth.isAuthenticated to return boolean

//    localStorage.getItem("authorized")==="true"
//    ?<Component {...props}/>
//    : <Redirect pathMatch= 'full' to='/login'/>
//   )

//   }/>
// )

class Main extends React.Component {


  constructor(props) {
    super(props);
   this.state = {
      user: this.props.user.user.signin
    };
  }  

  componentWillMount() {
    this.props.reqAuthAction(true)
  }

//   componentWillMount() {
//     // this.props.checkAuthAction(true)
//     // console.log("thisis tathe sfda")
//      console.log(this.props.user.user.signin)
//     // this.props.checkAuthAction(true)
//     // console.log(this.props)

//     let valdata;
//     session.get('auth', function (err, value) {
//       //=> err === null
//       //=> value === 'bar' 
//       console.log(value) 
//     })

//  console.log("value data"+valdata)
//   axios.get( "http://localhost:3000/api/Accounts/5ff8597f1789ef0b1e6b1b39/accessTokens/HCU6DqBvtcxSFNV2sMJMKiWLovqWRgAZ7GDJaUBf8Zft1HtiJ2MX4KxarIGrA9Yo" )
//   .then(response => {
//     console.log("*****you you token status*****")
//     console.log(response)
//     this.props.checkAuthAction(true);
//     console.log("this is the state of signin")
//     console.log(this.props.user.user.signin)
//   })
//   .catch(error => {
//     console.log("your token is invalid");
//   });
//        }


    render(){
      const PrivateRoute = ({component: Component, ...rest}) =>(

        <Route {...rest} render={(props)=>(
         //need to auth.isAuthenticated to return boolean
         //localStorage.getItem("authorized")==="true"
        //this.props.user.user.signin===true
        //console.log("the state of sign in redux :"+this.props.user.user.signin)
        //this.props.user.user.signin===false&&<Redirect pathMatch= 'full' to='/signin'/>
         localStorage.getItem("authorized")==="true"?<Component {...props}/>
         : <Redirect pathMatch= 'full' to='/signin'/>
        )
      
        }/>
      );
      return(    
      <Switch>
        <Route exact path="/" component={home2}/>
        <Route exact path="/home" component={home2}/>
        <PrivateRoute path="/list" component={listview}/>
        <PrivateRoute path="/listview" component={RightList}/>
        <Route path="/signin" component={login}/>
        <Route path="/signup" component={register}/>
        <PrivateRoute path="/watch/:id" component={watch}/>
      </Switch>)
    }

  
  
  
  };

// export default Main;
const MapStateToProps = (state) => {
  return {
    user: {...state}
};
};
const MapDispatchToProps = (dispatch) => {
  return{
    reqAuthAction: (m)=> dispatch(reqAuthAction(m))
  }
    
  
};

export default connect(MapStateToProps, MapDispatchToProps)(Main);