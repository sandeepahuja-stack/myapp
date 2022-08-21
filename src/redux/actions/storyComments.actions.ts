import { IStoryComment } from '../interfaces/Icomment';
import actionTypes from '../types/storycomment.types';

export const storyCommentLoadStart = () => ({
    type: actionTypes.STORIES_LOAD_COMMENTS_START
});

export const storyCommentLoadSuccess = (comments: IStoryComment[]) => ({
    type: actionTypes.STORIES_LOAD_COMMENTS_SUCCESS,
    payload: {comments}
});

export const storyCommentLoadError = (err: string) => ({
    type: actionTypes.STORIES_LOAD_COMMENTS_ERROR,
    payload: {err}
});
