import { Header, Footer } from '../components/Layout';
import { Container } from '../components/Layout';
import { HomeDurf, HomePlatform, HomeHero, HomeSpotlight, ProjectSpotlight } from '../components/Home';

import { convertData } from '../models/Project';
import { useEffect, useState } from 'react';
import RootStore from '../stores';
import { useStores } from '../hooks/useStores';

const Home = ({ projectsJSON }) => {
  const { projectStore } = useStores();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsArr = projectsJSON.map((projectJSON) => {
      const project = convertData.fromJSON(projectJSON, projectStore);
      // Add dynamic content which was not SSR to project model
      project.getLikes();
      project.getRequirementsInfo();
      project.getDurvers();
      return project;
    });
    setProjects(projectsArr);
  }, [setProjects]);

  return (
    <>
      <Header />
      <HomeHero />
      <HomeSpotlight />

      <Container>
        <ProjectSpotlight projects={projects} />
      </Container>
      <HomeDurf />
      <HomePlatform />

      <Footer />
    </>
  );
};

// Server side rendering of data on homepage
export const getStaticProps = async (context) => {
  const store = new RootStore();
  const { projectStore } = store;

  await projectStore.loadAllProjects();

  const projectsJSON = projectStore.projects.map((data) => {
    let project = convertData.toJSON(data);
    const timestamp = data.getReadableDate(data.timestamp);
    project.timestamp = timestamp;
    return project;
  });

  return {
    props: { projectsJSON },
    revalidate: 5,
  };
};

export default Home;
