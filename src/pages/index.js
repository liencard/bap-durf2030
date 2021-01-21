import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStores } from '../hooks/useStores';
import { ROUTES } from '../consts/index';

import Logout from '../components/Logout/Logout';
import ProjectList from '../components/ProjectList/ProjectList';
import { ProjectCard } from '../components/Project';
import Header from '../components/Header/Header';
import HeroHome from '../components/HeroHome/HeroHome';
import { Container } from '../components/Layout';

const Home = () => {
  const { uiStore } = useStores();
  const router = useRouter();

  useEffect(() => {
    // if (!uiStore.currentUser) {
    //   router.push(ROUTES.login);
    // }
  }, [uiStore.currentUser]);

  return (
    <>
      <Header />
      <HeroHome />

      <Container>
        <ProjectCard />
      </Container>
    </>
  );
};

export default Home;
