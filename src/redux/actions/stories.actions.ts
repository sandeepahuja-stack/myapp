import { IStoryResult } from '../interfaces/Istories';
import actionTypes from '../types/stories.types';

export const storiesLoadStart = () => ({
    type: actionTypes.STORIES_LOAD_START
});

// todo
export const storiesLoadSuccess = (stories: IStoryResult[]) => ({
    type: actionTypes.STORIES_LOAD_SUCCESS,
    payload: {stories}
});

export const storiesLoadError = (err: string) => ({
    type: actionTypes.STORIES_LOAD_ERROR,
    payload: {err}
});
