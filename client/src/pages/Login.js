import React, { useContext, useEffect, useState } from 'react';
import './Login.scss';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import { Box, Paper, Typography } from '@material-ui/core';
import { firebaseUiConfig } from '../firebaseConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const Login = ({ signup }) => {
  const { currentUser } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);

  // redirect if user is logged in already
  useEffect(() => {
    if (currentUser) setRedirect(true);
  }, [currentUser]);

  return (
    <Paper elevation={2} className='login-page-container'>
      {redirect && <Redirect to='/' />}
      <Box className='Box-form'>
        <Typography variant='h6'>
          Login or Sign up
        </Typography>
        <div id='loader'>Loading...</div>
        <StyledFirebaseAuth uiConfig={firebaseUiConfig} firebaseAuth={firebase.auth()} />
      </Box>
    </Paper>
  );
};

export default Login;
