import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import { ProjectHeader, ProjectContent, ProjectFooter, ProjectComments } from '../../components/Project';
import RootStore from '../../stores';

const Project = observer(({ project, id }) => {

  return (
    <>
      <Container>
        <ProjectHeader project={project} id={id} />
        <ProjectContent />
        <ProjectFooter />
        <ProjectComments />
      </Container>
    </>
  );
});

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

export const getStaticProps = async ({ params }) => {
  const store = new RootStore();
  const { projectStore } = store;
  const project = await projectStore.projectService.getById(params.id);

  return {
    props: { project: project.data, id: project.id },
  };
};

export default Project;
