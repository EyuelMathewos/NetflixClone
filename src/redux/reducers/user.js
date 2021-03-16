import UserService from "../../service/UserServices";
import axios from "axios";

import {SIGNIN} from "../Action/userAction";
import {CHECK_AUTH_STATUS} from "../Action/userAction";


import {REQ_CHECKAUTH} from "../Action/userAction";





const initialState = {
    "signin": false
  };
  const userReducer = (state=initialState , {type, payload}) => {
      switch(type) {
             case SIGNIN :
              return payload
             case CHECK_AUTH_STATUS :
              return payload
             case REQ_CHECKAUTH :
              return state
             default :
              return state
    };
    };
  export default userReducer;


  