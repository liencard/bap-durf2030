import { useEffect, useState } from 'react';
import { Container } from '../../components/Layout';
import { ProjectCard } from '../../components/Project';
import Header from '../../components/Header/Header';
import RootStore from '../../stores';
import styles from './Projects.module.scss';
import { convertData } from '../../models/Project';
import { useStores } from '../../hooks/useStores';

const Projects = ({ projectsJSON }) => {
  const { projectStore } = useStores();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsArr = [];
    projectsJSON.forEach((projectJSON) => {
      const project = convertData.fromJSON(projectJSON, projectStore);
      project.getLikes();
      projectsArr.push(project);
    });
    setProjects(projectsArr);
  }, [setProjects]);

  return (
    <>
      <Header />
      <Container>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
    </>
  );
};

export const getStaticProps = async (context) => {
  const store = new RootStore();
  const { projectStore } = store;

  await projectStore.loadAllProjects();
  //let projectsJSON = [];

  const projectsJSON = projectStore.projects.map((data) => {
    let project = convertData.toJSON(data);
    project['servicesRequired'] = true;
    project['materialsRequired'] = true;
    project['fundingRequired'] = false;

    // const loadData = async (project) => {
    //   const info = await projectStore.loadRequirementListInfoById(project.id);
    //   console.log(info.servicesDetails.required);
    //   project['servicesRequired'] = info.servicesDetails.required;
    // };
    // await loadData(project);

    //projectsJSON.push(project);

    return project;
  });

  console.log(projectsJSON[0]);

  return {
    props: { projectsJSON },
  };
};

export default Projects;
