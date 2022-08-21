import React, { Suspense, useEffect, useState } from "react";
import { Grid, Snackbar } from "@mui/material";
import AlertNotification from "../../components/common/Notification/AlertNotification";
import { useSelector } from "react-redux";
import IStore from "../../redux/interfaces/IStore";
import { useNavigate } from "react-router-dom";

const LoginForm = React.lazy(() => import(
    /* webpackChunkName: "LoginForm" */
    '../../components/common/LoginForm'));


const RegisterForm = React.lazy(() => import(
    /* webpackChunkName: "RegisterForm" */
    '../../components/common/RegisterForm'));

const Login = () => {
    const {user: {isLoading = false, err, registered=false, token =''}} = useSelector((state: IStore) => state);
    const [isLoginPage, setLoginPage ] = useState(true);
    const navigate = useNavigate();
    const switchPage = (flag: boolean) => {
        setLoginPage(flag);
    }

    
    useEffect(()=>{
        if (registered) {
            setLoginPage(true)
        }
    },[registered]);
    useEffect(()=>{
        if(token){
            navigate("/"); 
        }
    },[token, navigate])
    return (
        <>
        {isLoading && <Snackbar open={true} autoHideDuration={6000} message= " Loading..."/>}
        {err && <AlertNotification err={err} />}
        <Grid container spacing={2} margin={2}>
            {!isLoginPage ?
               <Suspense fallback={<div>Loading Register Form</div>}> <RegisterForm switchPage={switchPage}/></Suspense>
            :
            <Suspense fallback={<div>Loading Login Form</div>}> <LoginForm switchPage={switchPage} /></Suspense>
            }
        </Grid>

        </>
    )
}
export default Login;
