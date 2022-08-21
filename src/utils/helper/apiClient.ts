import axios, { AxiosRequestHeaders } from "axios";
import store from "../../redux/config/configureStore";
const apiClient = ({
    url, 
    headers

}: { url: string, headers?: AxiosRequestHeaders}) => {
    let token = '';
    let requestHeader = {...headers};
    if(store) {
        const getState = store.getState();
        token = getState?.user?.token;
        if(token) {

            requestHeader['Authorization'] = `Bearer ${token}11`;
        }
    }

    const axiosInstance = axios.create({
        baseURL: url,
        responseType: 'json',
        ...(requestHeader && {headers: requestHeader}),
        
    });
    return axiosInstance;
}
export default apiClient;