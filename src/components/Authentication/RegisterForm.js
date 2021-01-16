import React, { useState } from 'react';

///import style from './Authentication.module.css';

const RegisterForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {};

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="input__wrapper">
          <label htmlFor="firstname">voornaam</label>
          <input
            type="text"
            name="firstname"
            placeholder="voornaam"
            required="required"
            autoComplete="off"
            value={firstname}
            onChange={(e) => setFirstname(e.currentTarget.value)}
          />
        </div>
        <div className="input__wrapper">
          <label htmlFor="lastname">naam</label>
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            required="required"
            autoComplete="off"
            value={lastname}
            onChange={(e) => setLastname(e.currentTarget.value)}
          />
        </div>
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
        <input type="submit" value="Maak account" />
      </form>
    </>
  );
};

export default RegisterForm;
