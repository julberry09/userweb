import React from 'react';
import '../../App.css';
import { Route, Routes, Link } from 'react-router-dom';
import logo   from '../../assets/images/icons/sklogo.svg';
import Login  from '../../pages/authentication/Login';
import SignUp from '../../pages/authentication/Register';
import {Box,Typography  }      from '@material-ui/core';


const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      mungta, {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Home = () => {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            "Welcome to Carpool System!!"
          </p>
          <ul>
            <li><Link to="/signup">Sign up</Link></li>
            <li>   </li>
            <li><Link to="/login">Sign in</Link></li>
          </ul>
        </header>
        <Routes>
          <Route path="/signup" exact={true} element={SignUp} />
          <Route path="/login"  exact={true} element={Login}  />
        </Routes>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    );
};
export default Home;
