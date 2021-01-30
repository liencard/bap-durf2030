import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import { ProjectHeader, ProjectContent, ProjectFooter, ProjectComments } from '../../components/Project';
import RootStore from '../../stores';

const Project = observer(({ project }) => {
  return (
    <>
      <Container>
        <ProjectHeader project={project} />
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
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const store = new RootStore();
  const { projectStore } = store;
  const data = await projectStore.projectService.getById(params.id);
  const project = {
    id: data.id,
    title: data.title,
    intro: data.intro,
  };

  return {
    props: { project },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};

export default Project;
