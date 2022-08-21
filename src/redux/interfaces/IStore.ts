import { IStoryComment } from "./Icomment";
import { ISearchDoc } from "./Isearch";
import { IStoryResult } from "./Istories";
import { IUser } from "./IUser";

interface IStore {
    isLoading: boolean;
    err: string;
    stories: IStoryResult[];
    search: ISearchDoc[];
    user: IUser;
    comments: IStoryComment[];
}

export default IStore;