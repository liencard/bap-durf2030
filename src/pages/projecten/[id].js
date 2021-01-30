import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import {
  ProjectHeader,
  ProjectContent,
  ProjectFooter,
  ProjectComments,
} from '../../components/Project';
import RootStore from '../../stores';

const Project = observer(({ project }) => {
  console.log('pagina');
  console.log(project);
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
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const store = new RootStore();
  const { projectStore } = store;
  const data = await projectStore.projectService.getById(params.id);
  console.log('hii');
  console.log(data);
  const project = {
    id: data.id,
    title: data.title,
    intro: data.intro,
  };

  return {
    props: { project },
  };
};

export default Project;
