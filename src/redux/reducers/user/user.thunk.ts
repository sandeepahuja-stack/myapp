import LoginService from "../../../services/user/register/login.service";
import RegisterService from "../../../services/user/register/register.service";
import CookiesHelper from "../../../utils/helper/cookiesHelper.helper";
import {registerLoadError, registerLoadStart, registerLoadSuccess, loginLoadError, loginLoadStart, loginLoadSuccess} from '../../actions/user.actions';
import { IRegisterUserParam } from "../../interfaces/IUser";


export const registerUserAsync = ({
    email, 
    password
}: IRegisterUserParam)=> (dispatch: any) => {
    dispatch(registerLoadStart());
    RegisterService.createUser({
        email, 
        password
    }).then(()=>{
        dispatch(registerLoadSuccess());
    }).catch((err)=>{
        const {response: {data: {
            message
        }}} = err;
        dispatch(registerLoadError(message || err.message));
    })
}



export const loginUserAsync = ({
    email, 
    password
}: IRegisterUserParam)=> (dispatch: any) => {
    dispatch(loginLoadStart());
    LoginService.userLogin({
        email, 
        password
    }).then(({data})=>{
        
        CookiesHelper.createCookie('pwd',btoa(password),15);
        CookiesHelper.createCookie('token',btoa(data.access_token),15);
        dispatch(loginLoadSuccess({
            token: data.access_token,
            user: email
        }));
    }).catch((err)=>{
        const {response: {data: {
            message
        }}} = err;
        dispatch(loginLoadError(message || err.message));
    })
}


