import UserService from "../../service/UserServices";
import axios from "axios";
var session = require('browser-session-store')

let valdata = session.get('auth', function (err, value) {
  //=> err === null
  //=> value === 'bar' 
  console.log(value) 



})

async function hello(){
//  try{

//   const resp = await axios.get( "http://localhost:3000/api/Accounts/5ff8597f1789ef0b1e6b1b39/accessTokens/W7AxcGlqLB3Wt4EjlapeJqjArWJ3BFXCfvcWW7N9NYB94QtMnmHbJQliMK6wJJRQ" );
//   console.log("this is the value")
//   console.log(resp)
//   let val = JSON.stringify(resp.data)
//   return val.data;
  

//  }
//  catch(err){
//    console.log(err)
//  }
  
}
// console.log(hello())

const initialState = {
    "signin": false
  };
  const userReducer = (state=initialState , {type, payload}) => {
      switch(type) {
             case 'SIGNIN' :
              return payload
             case 'CHECKAUTH' :
              return payload
             default :
              return state
    };
    };
  export default userReducer;


  