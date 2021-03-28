import jwt from "jsonwebtoken";
import axios from "axios";
var decoded;
var resposeData;

function checkauth() {
  let getCuid = localStorage.getItem("cuid");

  try {
    decoded = jwt.verify(getCuid, "shhhhh");
  } catch (err) {
    // err
  }

  //Api call for checking the Access to token is valid
 if(decoded != null){
  axios.get( "http://localhost:3000/api/Accounts/"+decoded.user.userId+"/accessTokens/"+decoded.user.id )
  .then(response => {
    //console.log("*****you you token status*****")
    //console.log(response)
    
    resposeData=response;
  })
  .catch(error => {
    console.log("your token is invalid");
    
  });
  if ( decoded.user.id == decoded.user.id ) {
    return true;
  } else {
    return false;
  }


 }
 else{
  return false;
 }







  //console.log("api response")
  //console.log(decoded.user.id)


  // return decoded;
}

export function removeAuth() {
  console.log("************ remove auth ************")
  localStorage.removeItem("cuid");
  window.location="/";
}
export default checkauth;