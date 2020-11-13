import UPDATEMOVIES from '../Action/addMovie'
const initialState = [{
  "id": "TERMINATOR 3"}]
;
const movielistReducer = (state=initialState , {type, payload}) => {
    switch(type) {
           case 'UPDATEMOVIES' :
            return [...state,payload]
           default :
            return state
  };
  };
export default movielistReducer;