import styles from '../Authentication.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { AuthSocial } from '../../Authentication';
import { FormFieldInput } from '../../Create';

const AuthRegisterUser = ({ password, setPassword }) => {
  //const [password, setPassword] = useState('');
  return (
    <>
      <AuthSocial />
      <p>Of maak een account</p>
      <div className={styles.input__wrapper}>
        <FormFieldInput name="name" label="Volledige naam" required />
      </div>
      <div className={styles.input__wrapper}>
        <FormFieldInput name="email" label="Emailadress" required />
      </div>
      <div className={styles.input__wrapper}>
        <label className={styles.form__label} htmlFor="password">
          Wachtwoord
        </label>
        <input
          className={styles.form__input}
          type="password"
          name="password"
          placeholder="Wachtwoord"
          required="required"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
    </>
  );
};

export default AuthRegisterUser;
