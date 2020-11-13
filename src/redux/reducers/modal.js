const initialState = {
  "open": false,
  "content":""
}
;
const modalReducer = (state=initialState , {type, payload}) => {
    switch(type) {
           case 'UPDATEMODAL' :
            return payload
           default :
            return state
  };
  };
export default modalReducer;