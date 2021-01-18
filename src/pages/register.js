import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Register = () => {
  //   <Route exact path={ROUTES.register}>
  //     {uiStore.currentUser ? <Redirect to={ROUTES.home} /> : <RegisterForm />}
  //   </Route>;

  const router = useRouter();
  const currentUser = false;

  useEffect(() => {
    if (currentUser) {
      router.push('/');
    }
  });

  return (
    <>
      <p>Register</p>
    </>
  );
};

export default Register;
