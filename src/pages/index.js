import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Authentication from '../components/Authentication';
import LoginForm from '../components/Authentication/LoginForm';

import Logout from '../components/Logout/Logout';
import ProjectList from '../components/ProjectList/ProjectList';
import { useStores } from '../hooks/useStores';
import { ROUTES } from '../consts/index';

const Home = () => {
  const { uiStore } = useStores();
  const router = useRouter();

  useEffect(() => {
    if (!uiStore.currentUser) {
      router.push(ROUTES.login);
    }
  }, [uiStore.currentUser]);

  return (
    <>
      {/* <Authentication /> */}
      <p>Dag, user</p>
      <div style={{ padding: '5px' }}>
        <h3>My Todo Items</h3>
        <ProjectList />
      </div>

      <Logout />
    </>
  );
};

export default Home;
