import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStores } from '../../hooks/useStores';
import User from '../../models/User';
import firebase from 'firebase/app';
import Link from 'next/link';
import styles from './Authentication.module.scss';
import { Container } from '../Layout';

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
    console.log(result);
    router.push('/');
  };

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };

  const facebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const user = result.user;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
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
          <h1 className={styles.title}>Inloggen</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
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
              <a>Wachtwoord vergeten?</a>
            </div>
            <div className={styles.form__socials}>
              <button
                className={`${styles.form__btn} ${styles.btn__social} ${styles.btn__google}`}
                onClick={googleSignIn}
              >
                Verdergaan met Google
              </button>
              <button
                className={`${styles.form__btn} ${styles.btn__social} ${styles.btn__facebook}`}
                onClick={facebookSignIn}
              >
                Verdergaan met Facebook
              </button>
            </div>
            <input
              className={styles.form__btn}
              type="submit"
              value="Inloggen"
            />
          </form>
          <p className={styles.redirect}>
            Nog geen account?{' '}
            <Link href="/register">
              <span>Registreer</span>
            </Link>
          </p>
        </section>
      </Container>
    </>
  );
};

export default LoginForm;
