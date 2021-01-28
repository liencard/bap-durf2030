import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import { ProjectCard } from '../../components/Project';
import { storesContext } from '../../contexts';
import { useContext } from 'react';
import RootStore from '../../stores';

const Projects = ({ projects }) => {
  // const { projectStore } = useStores();
  // projectStore.loadAllProjects();

  return (
    <>
      <p>Test SSR projecten</p>
      <Container>
        {projects.map((project) => (
          <ProjectCard key={project.id} title={project.title} intro={project.intro} id={project.id} />
        ))}
      </Container>
    </>
  );
};

export const getStaticProps = async (context) => {
  // Temporary instance of rootStore to make connection to db
  const store = new RootStore();
  const { projectStore } = store;

  // Loading all projects
  await projectStore.loadAllProjects();
  let projects = [];

  // Get necessary data (not whole Projects model)
  // To do: in _app and all projects as provider?
  await projectStore.projects.forEach((project) => {
    projects.push({ id: project.id, title: project.title, intro: project.intro });
  });

  return {
    props: { projects: projects },
  };
};

export default Projects;
