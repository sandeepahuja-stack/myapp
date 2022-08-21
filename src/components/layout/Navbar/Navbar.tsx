import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = ()=>{
    dispatch(logoutUser());
    navigate('/login')
  }

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
            {userName === '' && <Button color="inherit" variant="text" data-testid="loginbtn"><Link to="/login" style={style}>Login</Link></Button>}
            {userName&& <>
                <Button
                  
                  data-testid="profilebtn"
                  color="inherit"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {userName}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
               
                >
                  <MenuItem onClick={logoutHandler} data-testid="logoutbtn">Logout</MenuItem>
                </Menu>
            </>}

          </Box>
            
          
        </Toolbar>
    </AppBar>;
}

export default Navbar;