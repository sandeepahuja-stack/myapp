
import RegisterForm from "../../components/common/RegisterForm";
import LoginForm from "../../components/common/LoginForm";
import { Grid, Snackbar } from "@mui/material";
import AlertNotification from "../../components/common/Notification/AlertNotification";
import { useSelector } from "react-redux";
import IStore from "../../redux/interfaces/IStore";

const Login = () => {
    const {user: {isLoading = false, err}} = useSelector((state: IStore) => state);
    return (
        <>
        {isLoading && <Snackbar open={true} autoHideDuration={6000} message= " Loading..."/>}
        {err && <AlertNotification err={err} />}
        <Grid container spacing={2}>
            <Grid item md={6}>
                <RegisterForm />
            </Grid>
            <Grid item md={6}>
                <LoginForm />
            </Grid>
        </Grid>

        </>
    )
}
export default Login;
