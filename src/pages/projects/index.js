import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';

const Projects = observer(() => {
  const { projectStore } = useStores();

  return (
    <>
      <p>Hallo</p>
      {projectStore.projects.map((project) => (
        <li key={project.userId}>{project.title}</li>
      ))}
    </>
  );
});

export default Projects;
