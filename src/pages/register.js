import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStores } from '../hooks/useStores';
import RegisterForm from '../components/Authentication/RegisterForm';
import { ROUTES } from '../consts/index';

const Register = () => {
  const { uiStore } = useStores();
  const router = useRouter();
  const currentUser = false;

  useEffect(() => {
    if (uiStore.currentUser) {
      router.push(ROUTES.home);
    }
  });

  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
