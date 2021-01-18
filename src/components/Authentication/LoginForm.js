import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts';
import { useStores } from '../../hooks/useStores';
import User from '../../models/User';

import style from './Authentication.module.css';

const LoginForm = () => {
  const { userStore, uiStore } = useStores();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new User({
      firstname: '',
      lastname: '',
      store: userStore,
      email: email,
      password: password,
    });
    const result = await uiStore.loginUser(user);
    console.log(result);
  };

  return (
    <>
      <h1>Inloggen</h1>
      <form onSubmit={handleSubmit}>
        <div className="input__wrapper">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            required="required"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="input__wrapper">
          <label htmlFor="password">wachtwoord</label>
          <input
            type="password"
            name="password"
            required="required"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <input type="submit" value="Inloggen" />
      </form>
      <p>
        Nog geen account?{' '}
        <Link Link to={ROUTES.register}>
          Registreer
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
