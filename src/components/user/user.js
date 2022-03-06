import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    width: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position : "relative"
 },
 username: {
     margin:"0px",
     padding:"0px"
 }
});

function User({user}) {
    const classes = useStyles();
    return (
    <div className={classes.container}>
        <Avatar alt="Remy Sharp" src={"http://127.0.0.1:8000"+user.profile.image} />
        {/* <img src={"http://127.0.0.1:8000"+user.profile.image} alt="user avatar" height="100px"/> */}
        <h4 className={classes.username}>{user.username}</h4>
    </div>
    );
}

export default User;
