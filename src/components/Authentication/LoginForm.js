import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStores } from '../../hooks/useStores';
import User from '../../models/User';

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
