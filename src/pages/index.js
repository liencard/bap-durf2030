import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Authentication from '../components/Authentication';
import Logout from '../components/Logout/Logout';

const Home = () => {
  // <Route path={ROUTES.home}>
  //   {uiStore.currentUser ? (
  //     <>
  //       <h1>Dag, user </h1>
  //       <Logout />
  //     </>
  //   ) : (
  //     <Redirect to={ROUTES.login} />
  //   )}
  // </Route>;

  const router = useRouter();
  const currentUser = false;

  useEffect(() => {
    if (currentUser) {
      router.push('/login');
    }
  });

  return (
    <>
      {/* <Authentication /> */}
      <p>Dag, user</p>
      <Logout />
    </>
  );
};

export default Home;
