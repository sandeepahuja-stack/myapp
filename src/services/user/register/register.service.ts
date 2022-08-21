import { IRegisterUserParam } from "../../../redux/interfaces/IUser";
import { CREATE_USER_URL } from "../../../utils/constants/api.constant";
import apiClient from "../../../utils/helper/apiClient";

class RegisterService {
    createUser = ({
        email, 
        password
    }: IRegisterUserParam) => {
        return apiClient({url: CREATE_USER_URL}).post('',JSON.stringify({ email, password }),
    {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    });

 // const response = await axios.post(REGISTER_URL,
            //     JSON.stringify({ email: user, password: pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
}

}

export default new RegisterService();