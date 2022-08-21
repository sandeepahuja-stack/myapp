import actionTypes from '../types/user.types';

export const registerLoadStart = () => ({
    type: actionTypes.REGISTER_USER_LOADING
});

export const registerLoadSuccess = () => ({
    type: actionTypes.REGISTER_USER_SUCCESS
});

export const registerLoadError = (err: string) => ({
    type: actionTypes.REGISTER_USER_FAIL,
    payload: {err}
});


export const loginLoadError = (err: string) => ({
    type: actionTypes.LOGIN_USER_FAIL,
    payload: {err}
});


export const loginLoadStart = () => ({
    type: actionTypes.LOGIN_USER_LOADING
});

export const loginLoadSuccess = ({
    user,
    token
}:{
    user: string;
    token: string
}) => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: {
        user,
        token
    }
});


export const logoutUser = () => ({
    type: actionTypes.LOGOUT_USER
});
