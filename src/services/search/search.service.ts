import { NY_SEARCH_URL } from "../../utils/constants/api.constant";
import apiClient from "../../utils/helper/apiClient";

class SearchService {
    getSearchData = (q: string, page?: number) => apiClient({url: NY_SEARCH_URL}).get(`?api-key=jFoJMeXBb41ncmeclGTAvGBgxJtZyX8A&q=${q}&page=${page || 1}`);
}

export default new SearchService();