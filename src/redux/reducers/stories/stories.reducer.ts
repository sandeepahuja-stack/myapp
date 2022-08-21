import actionTypes from '../../types/stories.types';
import initState from './stories.initState';

const storiesReducer = (state = initState, {type, payload}: {type: string, payload: any}) => {
    
    switch(type) {
        case actionTypes.STORIES_LOAD_START: 
            return {
                ...state,
                ...{isLoading: true,
                err: null,}
            };
        case actionTypes.STORIES_LOAD_SUCCESS:
            return {
                ...state,
                ...{isLoading: false,
                stories: payload.stories,
                err: ''}
            };
        
        case actionTypes.STORIES_LOAD_ERROR:
            return {
                ...state,
                ...{isLoading: false, 
                err: payload.err}
            };

        default: 
            return state;
    }

}

export default storiesReducer;