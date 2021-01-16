import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { ROUTES } from '../../consts';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Logout from '../Logout/Logout';
//import style from './Authentication.module.css';

const Authentication = () => {
  return (
    <>
      <Switch>
        <Route exact path={ROUTES.login}>
          <LoginForm />
        </Route>
        <Route exact path={ROUTES.register}>
          <RegisterForm />
        </Route>
        <Route path={ROUTES.home}>
          <h1>HOME</h1>
          <Logout />
        </Route>
      </Switch>
    </>
  );
};

export default Authentication;
