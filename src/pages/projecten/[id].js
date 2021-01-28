import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import { useStores } from '../../hooks/useStores';
import { Container } from '../../components/Layout';
import { ProjectHeader, ProjectContent, ProjectFooter, ProjectComments } from '../../components/Project';
import RootStore from '../../stores';

const Project = observer(({ project, id }) => {
  console.log('test');
  console.log(project);

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

export const getServerSideProps = async (context) => {
  const store = new RootStore();
  const { projectStore } = store;
  const project = await projectStore.projectService.getById(context.params.id);

  return {
    props: { project: project.data, id: project.id },
  };
};

export default Project;
