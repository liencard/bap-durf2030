import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStores } from '../hooks/useStores';
import { ROUTES } from '../consts/index';
import { AuthRegister } from '../components/Authentication';

const Register = () => {
  const { uiStore } = useStores();
  const router = useRouter();

  useEffect(() => {
    if (uiStore.currentUser) {
      router.push(ROUTES.home);
    }
  });

  return (
    <>
      <AuthRegister />
    </>
  );
};

export default Register;
