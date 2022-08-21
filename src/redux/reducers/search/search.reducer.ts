import actionTypes from '../../types/search.types';
import initState from './search.initState';

const searchReducer = (state = initState, {type, payload}: {type: string, payload: any}) => {
    switch(type) {
        case actionTypes.SEARCH_LOAD_START: 
            return {
                ...state,
                ...{isLoading: true,
                err: null,}
            };
        case actionTypes.SEARCH_LOAD_SUCCESS:
            return {
                ...state,
                ...{isLoading: false,
                search: payload,
                err: ''}
            };
        
        case actionTypes.SEARCH_LOAD_ERROR:
            return {
                ...state,
                ...{isLoading: false, 
                err: payload.err}
            };
        default: 
            return state;
    }

}

export default searchReducer;