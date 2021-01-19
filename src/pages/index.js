import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Authentication from '../components/Authentication';
import Logout from '../components/Logout/Logout';
import ProjectList from '../components/ProjectList/ProjectList';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Header from '../components/Header/Header';
import { Container } from '../components/Layout';

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

  console.log(process.env);

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
      <Header />
      {/* <p>Dag, user</p>
      <div style={{ padding: '5px' }}>
        <h3>My Todo Items</h3>
        <ProjectList />
      </div>
      <Logout /> */}

      <Container>
        <ProjectCard />
      </Container>
    </>
  );
};

export default Home;
