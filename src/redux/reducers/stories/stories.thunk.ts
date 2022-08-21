import StoriesService from "../../../services/stories/stories.service";
import { storiesLoadStart, storiesLoadError, storiesLoadSuccess} from '../../actions/stories.actions';
import { IStoriesResponse } from "../../interfaces/Istories";


export const loadstoriesAsync = (tab: string)=> (dispatch: any) => {
    dispatch(storiesLoadStart());
    StoriesService.getAllStories(tab).then(({data}:{data: IStoriesResponse})=>{
        const { results } = data;
        dispatch(storiesLoadSuccess(results));
    }).catch(({message}: {message: string})=>{
        dispatch(storiesLoadError(message));
    })
}