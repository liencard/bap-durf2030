import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = observer(() => {
  const { projectStore } = useStores();

  return (
    <>
      <Container>
        {projectStore.projects.map((project) => (
          <ProjectCard key={project.userId} title={project.title} intro={project.intro} />
        ))}
      </Container>
    </>
  );
});

export default Projects;
