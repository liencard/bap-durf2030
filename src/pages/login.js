import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStores } from '../hooks/useStores';
import LoginForm from '../components/Authentication/LoginForm';
import { ROUTES } from '../consts/index';

const Login = () => {
  const { uiStore } = useStores();
  const router = useRouter();

  useEffect(() => {
    if (uiStore.currentUser) {
      router.push(ROUTES.home);
    }
  });

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
