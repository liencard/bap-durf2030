import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import { useStores } from '../../hooks/useStores';
import { Container } from '../../components/Layout';
import { ProjectHeader, ProjectContent, ProjectFooter, ProjectComments } from '../../components/Project';

const Project = observer(({ query }) => {
  const id = query.id;
  const { projectStore } = useStores();

  const STATE_LOADING = 'loading';
  const STATE_DOES_NOT_EXIST = 'doesNotExist';
  const STATE_LOADING_MORE_DETAILS = 'loadingMoreDetails';
  const STATE_FULLY_LOADED = 'fullyLoaded';

  const [project, setProject] = useState(projectStore.resolveProject(id));
  const [state, setState] = useState(project ? STATE_LOADING_MORE_DETAILS : STATE_LOADING);

  useEffect(() => {
    const loadProject = async (id) => {
      try {
        // const resolvedProject = await projectStore.resolveProject(id);
        const resolvedProject = await projectStore.loadProject(id);
        if (!resolvedProject) {
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setState(STATE_FULLY_LOADED);
        setProject(resolvedProject);
      } catch (error) {
        console.log('Project failed loading');
      }
    };
    loadProject(id);
  }, [id, projectStore, setProject]);

  return (
    <>
      <p>State: {state}</p>
      <Container>
        {project && (
          <>
            <ProjectHeader project={project} />
            <ProjectContent />
            <ProjectFooter />
            <ProjectComments />
          </>
        )}
      </Container>
    </>
  );
});

Project.getInitialProps = ({ query }) => {
  return { query };
};

export default Project;
