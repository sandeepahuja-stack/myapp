import { NY_STORIES_URL, SECRET_KEY } from "../../utils/constants/api.constant";
import apiClient from "../../utils/helper/apiClient";

class StoriesService {
    getAllStories = (tab: string) => apiClient({url: `${NY_STORIES_URL}`}).get(`${tab}.json?api-key=${SECRET_KEY}`);
}

export default new StoriesService();