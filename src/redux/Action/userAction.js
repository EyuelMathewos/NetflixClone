export const SIGNIN = "SIGNIN";
export const CHECKAUTH = "CHECKAUTH";

const signinAction = (data)=>({
    type: 'SIGNIN',
    payload: {"signin":data}
});

const checkAuthAction = (data)=>({
    type: 'CHECKAUTH',
    payload: {"signin":data}
});

export default checkAuthAction;
