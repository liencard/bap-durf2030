import Header from '../components/Header/Header';
import HomeHero from '../components/Home/HomeHero/HomeHero';
import HomeSpotlight from '../components/Home/HomeSpotlight/HomeSpotlight';
import ProjectSpotlight from '../components/Home/ProjectSpotlight/ProjectSpotlight';
import { Container } from '../components/Layout';

const Home = () => {
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
