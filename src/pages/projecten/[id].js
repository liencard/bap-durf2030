import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import { ProjectHeader, ProjectContent, ProjectFooter, ProjectComments } from '../../components/Project';
import RootStore from '../../stores';
import { convertData } from '../../models/Project';
import { useStores } from '../../hooks/useStores';

const Project = observer(({ projectJSON }) => {
  const { projectStore } = useStores();
  const project = convertData.fromJSON(projectJSON, projectStore);
  project.getComments();

  return (
    <>
      <Container>
        <ProjectHeader project={project} />
        <ProjectContent />
        <ProjectFooter />
        <ProjectComments project={project} />
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
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const store = new RootStore();
  const { projectStore } = store;
  const data = await projectStore.projectService.getById(params.id);
  // const projectFromServer = data.toJSON();
  const projectJSON = convertData.toJSON(data);

  return {
    props: { projectJSON },
    revalidate: 5,
  };
};

export default Project;
