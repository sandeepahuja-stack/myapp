import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../redux/actions/user.actions";
import IStore from "../../../redux/interfaces/IStore";
import Search from "../Search";
const Navbar = () => {
  const style = {
    textDecoration: 'none',
    color: "#fff"
  }
  const {user} = useSelector((state: IStore) => state);
  const {user: userName} = user;
  const dispatch = useDispatch();
  let navigate = useNavigate();
    return <AppBar position="static" variant="elevation">
        <Toolbar sx={{
          justifyContent:"space-between"
        }}>
          <Box component="nav">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} role="menu">
              <Link to="/" role="menu-link" style={style}>Stories</Link>
            </Typography>
          </Box>
          <Box display="flex" justifyContent="end" >
            <Search />
            {userName === '' && <Button color="inherit" variant="text" ><Link to="/login" style={style}>Login</Link></Button>}
            {userName  && <Button color="inherit" variant="text" onClick={()=>{
              dispatch(logoutUser());
              navigate('/login')
              
            }} >Logout</Button>}

          </Box>
            
          
        </Toolbar>
    </AppBar>;
}

export default Navbar;