import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import { useStores } from '../../hooks/useStores';
import { Container } from '../../components/Layout';
import { ProjectHeader, ProjectContent, ProjectFooter, ProjectComments } from '../../components/Project';
import RootStore from '../../stores';

const Project = observer(({ project, id }) => {
  return (
    <>
      <p>Test SSR</p>
      <Container>
        <ProjectHeader project={project} />
        <ProjectContent />
        <ProjectFooter />
        <ProjectComments />
      </Container>
    </>
  );
});

// Get all possible static paths - all ids of projects to generate webpage
export const getStaticPaths = async () => {
  const store = new RootStore();
  const { projectStore } = store;
  // const projectIds = projectStore.projectService.getAllIds();
  const projects = await projectStore.projectService.getAll();
  const ids = projects.map((project) => project.id);
  const paths = ids.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

// Get whole project based on id, build project page by sending parameter
export const getStaticProps = async ({ params }) => {
  const store = new RootStore();
  const { projectStore } = store;
  const project = await projectStore.projectService.getById(params.id);

  return {
    props: { project: project.data, id: project.id },
  };
};

export default Project;
