import { useEffect, useState } from 'react';
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
  const { projectStore, uiStore } = useStores();
  const [project, setProject] = useState();
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = convertData.fromJSON(projectJSON, projectStore);
      const list = await projectStore.loadRequirementListById(data.id);
      setRequirements(list);
    };
    loadData();
  }, [projectStore, setRequirements]);

  useEffect(() => {
    const data = convertData.fromJSON(projectJSON, projectStore);
    data.getComments();
    data.getLikes();
    setProject(data);

    if (project && uiStore.currentUser) {
      const projectIsLiked = project.likes.find(
        (like) => like.userId === uiStore.currentUser.id
      );
      if (projectIsLiked) {
        project.setLiked(true);
      } else {
        project.setLiked(false);
      }
    }
  }, [setProject]);

  if (!project) {
    return <p>Project laden...</p>;
  }
  return (
    <>
      <Header />
      <Container>
        <ProjectHeader project={project} requirements={requirements} />
        <ProjectContent
          project={project}
          requirements={requirements}
          info={info}
        />
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
  //const projectItems = await projectStore.loadRequirementListById(params.id);
  projectJSON['owners'] = owners;

  return {
    props: { projectJSON, info },
    revalidate: 5,
  };
};

export default Project;
