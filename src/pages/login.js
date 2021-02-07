import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStores } from '../hooks/useStores';
import { AuthLogin } from '../components/Authentication';
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
      <AuthLogin />
    </>
  );
};

export default Login;
