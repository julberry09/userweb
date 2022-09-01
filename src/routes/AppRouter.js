import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import '../index.css';
import Home   from '../pages/authentication/Home';
import Login  from '../pages/authentication/Login';
import SignUp from '../pages/authentication/Register';
import Mypage from '../pages/authentication/Mypage';

const AppRouter = () => {
  return (
    <React.Fragment>
        <React.Fragment>
          <Routes>
            <Route path='/login'  element={ <Login /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='/mypage' element={ <Mypage /> } />
            <Route path='*'       element={ <Home /> } />
          </Routes>
        </React.Fragment>
    </React.Fragment>
  );
}

export default AppRouter;
