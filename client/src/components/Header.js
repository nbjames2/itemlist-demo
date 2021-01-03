import React, { useContext, useState } from 'react';
import './Header.scss';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button
} from '@material-ui/core';
import { Redirect, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

import firebase from 'firebase';

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);

  async function logout () {
    await firebase.auth().signOut();
    setRedirect(true);
  }

  return (
    <AppBar postion='absolute' className='AppBar'>
      {redirect && <Redirect to='/login' />}
      <Toolbar>
        <Container>
          <Typography variant='h6'>
            Item List Demo
          </Typography>
        </Container>
        {currentUser
          ? <Button color='inherit' onClick={() => logout('')} className='nav-link logout-button'>Log out</Button>
          : <Button color='inherit' className='nav-link'><NavLink className='nav-link' to='/login'>Login</NavLink></Button>}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
