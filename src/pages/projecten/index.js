import { Container } from '../../components/Layout';
import { ProjectCard } from '../../components/Project';
import RootStore from '../../stores';

const Projects = ({ projects }) => {
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
