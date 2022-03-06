import React, { useState } from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import { auth } from "../../services/user-services";
import {useAuth} from "../../hooks/useAuth"
import User from "../user/user";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const { authData, setAuth } = useAuth();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const data = await auth({username, password})
    setAuth(data);
  }
  const logout = () => {
    setAuth(null);
  } 
  const account = () => {
    history.push('/account')
  } 

  return (
    <div className="sidebar">
      { !authData ?
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="username" label="Username" 
                onChange={e => setUsername(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <VpnKeyTwoToneIcon />
              </Grid>
              <Grid item>
                <TextField id="password" label="Password" type='password' 
                onChange={e => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
          <Button color="primary" variant="contained" type='submit'>Login</Button>
          <br/>
        </form>
        <hr/>
        <Link to={'/register'}>Register here if you don't have an account yet</Link>
        </div>
      :
        <div>
          <User user={authData.user}/>
          <hr/>
          <Button color="primary" variant="contained" onClick={() => logout()}>Logut</Button>
          <br/>
          <Button color="primary" variant="contained" onClick={() => account()}>My Account</Button>
        </div>
      }
    </div>
  );
}

export default Sidebar;
