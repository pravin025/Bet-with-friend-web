import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import {useAuth} from "../../hooks/useAuth";
import { changePassword } from "../../services/user-services";
import { uploadAvatar } from "../../services/user-services";
import {NotificationManager} from 'react-notifications';



function Account() {
  const [ oldPassword, setOldPassword ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ password2, setPassword2 ] = useState('');
  const { authData } = useAuth();
  const [ image, setImage ] = useState()

  const passMatch = () => {
      return password === password2;
  }

  const uploadFile = async e => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("image", image, image.name)
    const uploaded = await uploadAvatar(authData.user.profile.id, uploadData)
    if(uploaded){
        NotificationManager.success("Image uploaded successfully.")
    } else {
        NotificationManager.success("Error !!!, uploading image.")
    }
  }

  const changePass = async e => {
    e.preventDefault();
    if (passMatch()) {
        const chnagePassData = await changePassword(authData.user.id, {old_password:oldPassword, new_password:password});
        NotificationManager.warning("Password Updated Successfully.")

    } else {
        NotificationManager.warning("Password don't match")
    }
  }
  
  return (
    <div>
      <Link to={'/'}>back</Link>
      <h3>Change Profile Image</h3>
      <form onSubmit={uploadFile}>
        <label>
            <p>upload your avatar</p>
            <TextField type="file" onChange={ e => setImage(e.target.files[0])}/>
        </label>
        <Button type="submit" variant="contained" color="primary">Upload File</Button>
      </form>
      <h3>Change password</h3>
      <form onSubmit={changePass}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <VpnKeyTwoToneIcon />
          </Grid>
          <Grid item>
          <TextField id="old-password" label="Old Password" type='password' 
          onChange={e => setOldPassword(e.target.value)}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <VpnKeyTwoToneIcon />
          </Grid>
          <Grid item>
          <TextField id="password" label="New Password" type='password' 
          onChange={e => setPassword(e.target.value)}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <VpnKeyTwoToneIcon />
          </Grid>
          <Grid item>
            <TextField id="password2" label="Confirm New Password" type='password' 
              onChange={e => setPassword2(e.target.value)}/>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">Change Password</Button>
      </form>
    </div>
  );
}

export default Account;
