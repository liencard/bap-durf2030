import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {
  // <Route exact path={ROUTES.login}>
  //   {uiStore.currentUser ? <Redirect to={ROUTES.home} /> : <LoginForm />}
  // </Route>;

  const router = useRouter();
  const currentUser = true;

  useEffect(() => {
    if (currentUser) {
      router.push('/');
    }
  });

  return (
    <>
      <p>Login</p>
    </>
  );
};

export default Login;
