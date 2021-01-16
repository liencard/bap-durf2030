import React, { useState } from 'react';

import style from './Authentication.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {};

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
    </>
  );
};

export default LoginForm;
