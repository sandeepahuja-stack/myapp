import StoryCommentService from "../../../services/storyComment/storyComment.service";
import {storyCommentLoadError, storyCommentLoadStart, storyCommentLoadSuccess} from '../../actions/storyComments.actions';
import { IStoryComment } from "../../interfaces/Icomment";

export const loadstoriesCommentAsync = (tab: number)=> (dispatch: any) => {
    dispatch(storyCommentLoadStart());
    
    StoryCommentService.getAllComment(tab).then(({data}: {data: IStoryComment[]}) =>{
        dispatch(storyCommentLoadSuccess(data));
    }).catch(()=>{
       
        dispatch(storyCommentLoadError('unable to load comments'));
    })
}
