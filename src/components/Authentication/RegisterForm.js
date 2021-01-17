import React, { useState } from 'react';
import { useStores } from '../../hooks/useStores';
import User from '../../models/User';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../consts/index';

///import style from './Authentication.module.css';

const RegisterForm = () => {
  const { userStore, uiStore } = useStores();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new User({
      name: name,
      lastname: lastname,
      store: userStore,
      email: email,
      password: password,
    });
    const result = await uiStore.registerUser(user);
    if (result.uid) {
      // uid is beschikbaar en te vinden als je het result logt -> gebruiker correct geregistreerd
      history.push(ROUTES.home);
    } else {
      //registratie mislukt
      console.log(result);
    }
  };

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
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="input__wrapper">
          <label htmlFor="lastname">naam</label>
          <input
            type="text"
            name="lastname"
            placeholder="achternaam"
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
