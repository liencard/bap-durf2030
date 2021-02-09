import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useStores } from '../../../hooks/useStores';
import { ROUTES } from '../../../consts/index';
import { Container } from '../../Layout';
import User from '../../../models/User';
import Link from 'next/link';
import styles from '../Authentication.module.scss';
import TextField from '@material-ui/core/TextField';
import { AuthSocialLogin } from '../../Authentication';
import { AuthPasswordReset } from '../../Authentication';

import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const LoginForm = () => {
  const router = useRouter();
  const { userStore, uiStore } = useStores();
  const [email, setEmail] = useState('');
  const [currentUser, setCurrentUser] = useState(uiStore.currentUser);

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = new User({
      name: '',
      store: userStore,
      email: email,
      password: values.password,
    });
    const result = await uiStore.loginUser(user);

    if (result.operationType === 'signIn') {
      console.log('user gevonden');
      router.push(ROUTES.home);
    } else {
      console.log('geen correcte user');
    }

    // const redirectUser = async () => {
    //   const currentUser = await uiStore.currentUser;
    //   if (currentUser) {
    //     console.log('user gevonden');
    //     router.push(ROUTES.home);
    //   } else {
    //     console.log('geen correcte user');
    //   }
    // };
    // await redirectUser();
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const setUser = await uiStore.currentUser;
        if (!setUser) {
          return;
        }
        setCurrentUser(setUser);
        router.push(ROUTES.home);
      } catch (error) {
        console.log('User failed loading');
        router.push(ROUTES.login);
      }
    };
    loadUser();
  }, [uiStore, setCurrentUser, uiStore.currentUser]);

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
        <div className={styles.auth__img}></div>
        <section className={styles.auth}>
          <div className={styles.auth__wrapper}>
            <h1 className={styles.title}>Inloggen</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input__wrapper}>
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
                <FormControl
                  className={styles.textfield}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel htmlFor="password">Wachtwoord</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <AuthPasswordReset />
              </div>
              <AuthSocialLogin />
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
          </div>
        </section>
      </Container>
    </>
  );
};

export default LoginForm;
