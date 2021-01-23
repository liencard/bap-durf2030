import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStores } from '../hooks/useStores';
import { ROUTES } from '../consts/index';

import Logout from '../components/Logout/Logout';
import ProjectList from '../components/ProjectList/ProjectList';
import Header from '../components/Header/Header';
import HomeHero from '../components/Home/HomeHero/HomeHero';
import HomeSpotlight from '../components/Home/HomeSpotlight/HomeSpotlight';
import ProjectSpotlight from '../components/Home/ProjectSpotlight/ProjectSpotlight';
import { Container } from '../components/Layout';

const Home = () => {
  const { uiStore } = useStores();
  const router = useRouter();

  useEffect(() => {
    // if (!uiStore.currentUser) {
    //   router.push(ROUTES.login);
    // }

    if (uiStore.currentUser) {
      console.log(uiStore.currentUser);
    } else {
      console.log('no current user');
    }
  }, [uiStore.currentUser]);

  return (
    <>
      <Header />
      <HomeHero />
      <HomeSpotlight />

      <Container>
        <ProjectSpotlight />
      </Container>
    </>
  );
};

export default Home;
