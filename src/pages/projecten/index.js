import { Container } from '../../components/Layout';
import { ProjectCard } from '../../components/Project';
import Header from '../../components/Header/Header';
import RootStore from '../../stores';
import styles from './Projects.module.scss';

const Projects = ({ projects }) => {
  return (
    <>
      <Header />
      <div className={styles.projects}>
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
      </div>
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

  //const info = await projectStore.loadRequirementListInfoById(params.id);

  return {
    props: { projects },
  };
};

export default Projects;
