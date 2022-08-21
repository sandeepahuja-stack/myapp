import { ISearchDoc } from '../interfaces/Isearch';
import actionTypes from '../types/search.types';

export const searchLoadStart = () => ({
    type: actionTypes.SEARCH_LOAD_START
});

// todo
export const searchLoadSuccess = (search: ISearchDoc[]) => ({
    type: actionTypes.SEARCH_LOAD_SUCCESS,
    payload: search
});

export const searchLoadError = (err: string) => ({
    type: actionTypes.SEARCH_LOAD_ERROR,
    payload: {err}
});
