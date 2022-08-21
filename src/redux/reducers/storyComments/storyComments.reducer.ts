import actionTypes from '../../types/storycomment.types';
import initState from './storyComments.initState';

const storiesCommentReducer = (state = initState, {type, payload}: {type: string, payload: any}) => {
    
    switch(type) {
        case actionTypes.STORIES_LOAD_COMMENTS_START: 
            return {
                ...state,
                ...{isLoading: true,
                err: null,}
            };
        case actionTypes.STORIES_LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                ...{isLoading: false,
                comments: payload.comments,
                err: ''}
            };
        
        case actionTypes.STORIES_LOAD_COMMENTS_ERROR:
            return {
                ...state,
                ...{isLoading: false, 
                err: payload.err}
            };

        default: 
            return state;
    }

}

export default storiesCommentReducer;