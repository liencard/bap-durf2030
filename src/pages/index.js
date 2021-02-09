import { Header, Footer } from '../components/Layout';
import { Container } from '../components/Layout';
import { HomeDurf, HomePlatform, HomeHero, HomeSpotlight, ProjectSpotlight } from '../components/Home';

const Home = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeSpotlight />

      <Container>
        <ProjectSpotlight />
        <HomeDurf />
        <HomePlatform />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
