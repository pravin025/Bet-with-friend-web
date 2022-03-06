import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import {useAuth} from "../../hooks/useAuth";
import { register } from "../../services/user-services";
import { auth } from "../../services/user-services";



function Register() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ password2, setPassword2 ] = useState('');
  const [ email, setEmail ] = useState('');
  const history = useHistory();
  const { authData, setAuth } = useAuth();

  const passMatch = () => {
      return password === password2;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (passMatch()) {
        const regData = await register({username,password, email, "profile":{}});
        if (regData) {
          console.log(regData);
          const data = await auth({username, password})
          setAuth(data);
          history.push('/account')
        }

    } else {
        console.log("password mis match")
    }
  }
  return (
    <div>
      <Link to={'/'}>back</Link>
      <h3>Register</h3>
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
                <MailIcon />
              </Grid>
              <Grid item>
                <TextField id="email" label="email" 
                onChange={e => setEmail(e.target.value)}
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
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <VpnKeyTwoToneIcon />
              </Grid>
              <Grid item>
                <TextField id="password2" label="Confirm Password" type='password' 
                onChange={e => setPassword2(e.target.value)}
                />
              </Grid>
            </Grid>
          <hr/>
          <Button color="primary" variant="contained" type='submit'>Register</Button>
          <br/>
        </form>
    </div>
  );
}

export default Register;
