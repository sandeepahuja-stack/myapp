import { Box, Button, TextField } from '@mui/material';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../../../redux/reducers/user/user.thunk';


const LoginForm = ({
    switchPage
}:{
    switchPage: (arg0: boolean)=>void
}) => {
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    

    const dispatch = useDispatch();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(loginUserAsync({ email: user, password: pwd }));
        
      
    }

    return (
        <section>
            <h1>Sign In</h1>
            <form data-testid="login-form" onSubmit={handleSubmit}>
                <Box>
                <TextField name="email" margin="dense" type="text" placeholder="User Name"  label="User"  required id="username"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    />
                    </Box>
                
                 <Box mb="10px">
                <TextField name="password" margin="dense" type="password" placeholder="password"  label="Password" data-testid="password" required id="password"
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    />
                    </Box>
                <Box>
                    <Button type="submit" variant="contained" color="secondary" >
                            Sign In
                    </Button>
                </Box>
                
            </form>
            <p>
                Need an Account? {' '}
                    {/*put router link here*/}
                    <Button variant="text" onClick={()=>{
                        switchPage(false)
                    }}>
                        Sign up?
                    </Button>
            </p>
        </section>
        
    )
}

export default LoginForm