import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStores } from '../../hooks/useStores';
import User from '../../models/User';
import firebase from 'firebase/app';

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
        <button onClick={googleSignIn}>Google inloggen</button>
        <button onClick={facebookSignIn}>Facebook inloggen</button>
      </form>
    </>
  );
};

export default LoginForm;
