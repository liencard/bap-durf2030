import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/Layout';
import {
  HomeDurf,
  HomePlatform,
  HomeHero,
  HomeSpotlight,
  ProjectSpotlight,
} from '../components/Home';

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
