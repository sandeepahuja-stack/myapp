import { NY_COMMENT_STORY_URL } from "../../utils/constants/api.constant";
import apiClient from "../../utils/helper/apiClient";

class StoryCommentService {
    getAllComment = (articleId: number) => apiClient({url: `${NY_COMMENT_STORY_URL}`}).get(`${articleId}/comments`);
}

export default new StoryCommentService();