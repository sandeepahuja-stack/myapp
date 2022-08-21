import { Middleware } from "redux";
import { applyMiddleware, compose, createStore  } from "redux";
import thunk from "redux-thunk";
import { USER_BASE_API_URL } from "../../utils/constants/api.constant";
import apiClient from "../../utils/helper/apiClient";
import rootReducer from "../rootReducer";


const customMiddleWare: Middleware = store => next => action => {
    if(store.getState()?.user?.token && `${action.type}`.includes('START')) {

        apiClient({
            url: USER_BASE_API_URL ,
            headers: { 'Content-Type': 'application/json' }
        }).post('',{},{
           
            withCredentials: true
        }).then(()=>{

        }).catch((e)=>{
            console.log(e);
            const {response} = e;
            if(response?.status === 401 && window) {
                alert('session timeout');
                window.location.href = '/login';
            }
            return;
        });
        
    }
    next(action);
  }

const configureStore = () => {
    const middlewares = [customMiddleWare, thunk];
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers = composeEnhancer(applyMiddleware(...middlewares));
    const store = createStore(rootReducer(), enhancers);
    return store;

}
const store = configureStore()
export default store;