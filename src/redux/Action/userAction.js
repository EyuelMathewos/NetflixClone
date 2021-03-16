export const SIGNIN = "SIGNIN";
export const CHECK_AUTH_STATUS = "CHECK_AUTH_STATUS";


export const REQ_CHECKAUTH = "REQ_CHECKAUTH";

const signinAction = (data)=>({
    type: 'SIGNIN',
    payload: {"signin":data}
});

const reqAuthAction = (data)=>({
    type: REQ_CHECKAUTH,
    payload: {"signin":data}
});

const checkAuthAction = (data)=>({
    type: CHECK_AUTH_STATUS,
    payload: {"signin":data}
});

export default reqAuthAction;
