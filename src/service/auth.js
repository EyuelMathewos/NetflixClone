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
  if (decoded != null && decoded.success == true) {
    axios
      .get(
        "https://netflix-hi7l.onrender.com/api/Accounts/" +
          decoded.user.userId +
          "/accessTokens/" +
          decoded.user.id
      )
      .then((response) => {
        //console.log("*****you you token status*****")
        //console.log(response)

        resposeData = response;
      })
      .catch((error) => {
        console.log("error occurred requesting for access token validity");
      });
    if (decoded.user.id == decoded.user.id) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

  //console.log("api response")
  //console.log(decoded.user.id)

  // return decoded;
}

export function removeAuth() {
  console.log("************ remove auth ************");
  localStorage.clear();
  window.location = "/";
}
export default checkauth;
