import { combineReducers } from "redux"
import errorReducer from "./reducers/error/error.reducer";
import searchReducer from "./reducers/search/search.reducer";
import storiesReducer from "./reducers/stories/stories.reducer"
import storiesCommentReducer from "./reducers/storyComments/storyComments.reducer";
import userReducer from "./reducers/user/user.reducer";

const rootReducer = () => {
    return combineReducers({
        stories: storiesReducer,
        search: searchReducer,
        err: errorReducer,
        user: userReducer,
        comments: storiesCommentReducer,
    })
}
export default rootReducer;