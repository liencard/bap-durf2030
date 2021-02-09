import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import { ROUTES } from '../../../consts/index';
import { Container, HeaderForm } from '../../Layout';
import User from '../../../models/User';
import Link from 'next/link';
import styles from '../Authentication.module.scss';
import TextField from '@material-ui/core/TextField';
import { AuthSocial } from '../../Authentication';
import { AuthPasswordReset } from '../../Authentication';

import { AuthPasswordInput } from '../../Authentication';

const LoginForm = () => {
  const router = useRouter();
  const { userStore, uiStore } = useStores();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new User({
      name: '',
      store: userStore,
      email: email,
      password: password,
    });
    const result = await uiStore.loginUser(user);
    console.log(uiStore.currentUser);
    if (uiStore.currentUser) {
      router.push(ROUTES.home);
    } else {
      console.log(result);
    }
  };

  return (
    <>
      <HeaderForm />
      <Container>
        <div className={styles.auth__img}></div>
        <section className={styles.auth}>
          <div className={styles.auth__wrapper}>
            <h1 className={styles.title}>Inloggen</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input__wrapper}>
                {/* <label className={styles.form__label} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.form__input}
                  type="email"
                  name="email"
                  placeholder="E-mailadres"
                  required="required"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                /> */}

                <TextField
                  className={styles.textfield}
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
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
                {/* <PasswordField /> */}

                <AuthPasswordReset />
              </div>
              <AuthSocial />
              <input className={styles.form__btn} type="submit" value="Inloggen" />
            </form>
            <p className={styles.redirect}>
              Nog geen account?{' '}
              <Link href="/register">
                <span>Registreer</span>
              </Link>
            </p>
          </div>
        </section>
      </Container>
    </>
  );
};

export default LoginForm;
