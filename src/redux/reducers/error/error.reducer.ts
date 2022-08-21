import actionTypes from '../../types/error.types';
import initState from './error.initState';

const errorReducer = (state = initState, {type, payload}: {type: string, payload: any}) => {
    
    switch(type) {
        case actionTypes.HIDE_ERROR:
            return {
                ...state,
                err: null
            };
        
        case actionTypes.SHOW_ERROR:
            return {
                ...state,
                err: payload.err
            };
        default: 
            return state;
    }

}

export default errorReducer;