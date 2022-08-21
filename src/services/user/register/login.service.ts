import { IRegisterUserParam } from "../../../redux/interfaces/IUser";
import { LOGIN_USER_URL } from "../../../utils/constants/api.constant";
import apiClient from "../../../utils/helper/apiClient";

class LoginService {
    userLogin = ({
        email, 
        password
    }: IRegisterUserParam) => {
        return apiClient({url: LOGIN_USER_URL,  headers: { 'Content-Type': 'application/json' }}).post('',JSON.stringify({ email, password }),
        {
           
            withCredentials: true
        });

    }

}

export default new LoginService();