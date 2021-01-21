import { useState } from 'react';
import { useRouter } from 'next/router';
import { useStores } from '../../hooks/useStores';
import { ROUTES } from '../../consts/index';
import User from '../../models/User';
import Logout from '../Logout/Logout';
import Link from 'next/link';
import styles from './Authentication.module.scss';
import { Container } from '../Layout';

const RegisterForm = () => {
  const { userStore, uiStore } = useStores();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = new User({
      name: firstname,
      store: userStore,
      email: email,
      password: password,
    });
    const result = await uiStore.registerUser(user);
    if (result.uid) {
      // uid is beschikbaar en te vinden als je het result logt -> gebruiker correct geregistreerd
      router.push(ROUTES.home);
    } else {
      //registratie mislukt
      console.log(result);
    }
  };

  return (
    <>
      <Link href="/">
        <img
          className={styles.logo}
          src="/logo.svg"
          alt="logo DURF2030"
          width="45"
          height="60"
        />
      </Link>
      <Container>
        <img
          className={styles.auth__img}
          src="/login.png"
          alt="login 3D render"
          width="674"
          height="971"
        />
        {/* <div className={styles.auth__img}></div> */}
        <section className={styles.auth__wrapper}>
          <h1 className={styles.title}>Registreer</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__socials}>
              <button
                className={`${styles.form__btn} ${styles.btn__social} ${styles.btn__google}`}
              >
                Verdergaan met Google
              </button>
              <button
                className={`${styles.form__btn} ${styles.btn__social} ${styles.btn__facebook}`}
              >
                Verdergaan met Facebook
              </button>
            </div>
            <p>Of maak een account</p>
            <div className={styles.input__wrapper}>
              <label className={styles.form__label} htmlFor="firstname">
                Naam
              </label>
              <input
                className={styles.form__input}
                type="text"
                name="firstname"
                placeholder="Naam"
                required="required"
                autoComplete="off"
                value={firstname}
                onChange={(e) => setFirstname(e.currentTarget.value)}
              />
            </div>
            <div className={styles.input__wrapper}>
              <label className={styles.form__label} htmlFor="email">
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
            </div>

            <input
              className={styles.form__btn}
              type="submit"
              value="Maak account"
            />
          </form>

          <p className={styles.redirect}>
            Heb je al een account?{' '}
            <Link href="/login">
              <span>Log in</span>
            </Link>
          </p>
        </section>
      </Container>
    </>
  );
};

export default RegisterForm;
