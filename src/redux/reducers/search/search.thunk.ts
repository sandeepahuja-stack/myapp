import SearchService from "../../../services/search/search.service";
import { searchLoadError, searchLoadStart, searchLoadSuccess} from '../../actions/search.actions';
import { ISearchResponse } from "../../interfaces/Isearch";

export const loadsearchAsync = (data: string, page: number)=> (dispatch: any) => {
    dispatch(searchLoadStart());
    
    SearchService.getSearchData(data, page).then(({data}:{data: ISearchResponse})=>{
        const { response: {docs} } = data;
        dispatch(searchLoadSuccess(docs));
    }).catch(({message}: {message: string})=>{
        dispatch(searchLoadError(message));
    })
}