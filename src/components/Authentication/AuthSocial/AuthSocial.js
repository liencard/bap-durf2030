import { useRouter } from 'next/router';
import { useStores } from '../../../hooks/useStores';
import { ROUTES } from '../../../consts/index';
import User from '../../../models/User';
import firebase from 'firebase/app';
import styles from './AuthSocial.module.scss';

const AuthSocial = () => {
  const router = useRouter();
  const { userStore } = useStores();

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        registerSocial(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const facebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const accessToken = credential.accessToken;
        const user = result.user;
        registerSocial(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const registerSocial = async (user) => {
    const newUser = new User({
      id: user.uid,
      name: user.displayName,
      store: userStore,
      email: user.email,
      password: '',
      avatar: user.photoURL,
    });
    const result = userStore.createUser(newUser);
    router.push(ROUTES.home);
  };

  return (
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
  );
};
export default AuthSocial;
