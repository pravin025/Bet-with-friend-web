import React, { useState } from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import { auth } from "../services/user-services";

function Sidebar() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async e => {
    e.preventDefault();
    const authData = await auth({username, password})
    console.log(authData)
  }

  return (
    <div className="sidebar">
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
      </form>
    </div>
  );
}

export default Sidebar;
