import actionTypes from '../../types/user.types';
import initState from './user.iniState';

const userReducer = (state = initState, {type, payload}: {type: string, payload: any}) => {
    
    switch(type) {
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                err: null,
                isLoading: false,
                registered: true,
            };
        
        case actionTypes.REGISTER_USER_LOADING:
            return {
                ...state,
                isLoading: true,
                err: null,
                registered: false,
            };

        case actionTypes.REGISTER_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                err: payload.err,
                registered: false,
            };

        case actionTypes.LOGIN_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                err: payload.err,
                registered: false,
            };
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                err: null,
                token: payload.token,
                user: payload.user,
                registered: false,
            };

        case actionTypes.LOGIN_USER_LOADING:
            return {
                ...state,
                isLoading: true,
                err: null,
                token: '',
                user: '',
                registered: false,
            };


        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                isLoading: false,
                err: null,
                token: '',
                user: '',
                registered: false,
            };
        default: 
            return state;
    }

}

export default userReducer;