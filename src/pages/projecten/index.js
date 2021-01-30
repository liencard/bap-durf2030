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
  const store = new RootStore();
  const { projectStore } = store;

  await projectStore.loadAllProjects();
  let projects = [];

  await projectStore.projects.forEach((project) => {
    projects.push({ id: project.id, title: project.title, intro: project.intro });
  });

  return {
    props: { projects },
  };
};

export default Projects;
