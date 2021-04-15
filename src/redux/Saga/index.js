import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'qs';

let data;
function* helloSaga() {
  yield console.log('Hello Sagas!')
  }

  export function* checkAuthAsync(action) {
    
     yield console.log('calling check Logining status')
    
//     yield axios.get( "https://movieapiet.herokuapp.com/api/Accounts/5ff8597f1789ef0b1e6b1b39/accessTokens/p4gJGvml99VW5HHyrX4H6bARJiikyNNn5bzx9yl0EKfSTB3RXAQCF8wF9tftMhTj" )
//     .then(response => {
//       console.log("*****you you token status from redux saga*****")
//       console.log(response)
//       data=response.data;
//       console.log("this is the state of signin")
//       console.log(this.props.user.user.signin)
//     })
//     .catch(error => {
//       console.log("your token is invalid");
//     });
    //console.log(data)
    yield put({ type: "CHECK_AUTH_STATUS", payload:  {"signin":true} });

  }



  



  export function* watchEmployeeListAsync() {
    yield takeLatest('REQ_CHECKAUTH', checkAuthAsync)

  }

   function* rootSaga() {
    yield all([
      helloSaga(),
      watchEmployeeListAsync()
    ])
  }
  export default rootSaga
