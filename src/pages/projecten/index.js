import { Container } from '../../components/Layout';
import { ProjectCard } from '../../components/Project';
import Header from '../../components/Header/Header';
import RootStore from '../../stores';

const Projects = ({ projects }) => {
  return (
    <>
      <Header />
      <Container>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            intro={project.intro}
            id={project.id}
          />
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
    console.log(project);
    projects.push({
      id: project.id,
      title: project.title,
      intro: project.intro,
    });
  });

  return {
    props: { projects },
  };
};

export default Projects;
