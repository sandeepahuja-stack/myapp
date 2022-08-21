import { NY_STORIES_URL } from "../../utils/constants/api.constant";
import apiClient from "../../utils/helper/apiClient";

class StoriesService {
    getAllStories = (tab: string) => apiClient({url: `${NY_STORIES_URL}`}).get(`${tab}.json?api-key=jFoJMeXBb41ncmeclGTAvGBgxJtZyX8A`);
}

export default new StoriesService();