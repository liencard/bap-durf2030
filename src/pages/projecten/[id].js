import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import Header from '../../components/Header/Header';
import {
  ProjectHeader,
  ProjectContent,
  ProjectFooter,
  ProjectComments,
} from '../../components/Project';
import RootStore from '../../stores';
import { convertData } from '../../models/Project';
import { useStores } from '../../hooks/useStores';

const Project = observer(({ projectJSON, info }) => {
  const { projectStore } = useStores();
  const project = convertData.fromJSON(projectJSON, projectStore);
  project.getComments();

  return (
    <>
      <Header />
      <Container>
        <ProjectHeader project={project} />
        <ProjectContent project={project} info={info} />
        <ProjectFooter project={project} />
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
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const store = new RootStore();
  const { projectStore } = store;
  const data = await projectStore.projectService.getById(params.id);
  const projectJSON = convertData.toJSON(data);
  const ownersArr = await projectStore.loadProjectOwnersById(params.id);
  const owners = ownersArr.map((owner) => ({
    name: owner.name,
    avatar: owner.avatar,
    id: owner.id,
  }));
  const info = await projectStore.loadRequirementListInfoById(params.id);
  projectJSON['owners'] = owners;

  return {
    props: { projectJSON, info },
    revalidate: 5,
  };
};

export default Project;
