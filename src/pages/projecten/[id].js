import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Header, Footer } from '../../components/Layout';
import {
  ProjectHeader,
  ProjectContent,
  ProjectFooter,
  ProjectComments,
  ProjectEditBanner,
} from '../../components/Project';
import RootStore from '../../stores';
import { convertData } from '../../models/Project';
import { convertDataUser } from '../../models/User';
import { useStores } from '../../hooks/useStores';

const Project = observer(({ projectJSON, usersJSON }) => {
  const { projectStore, uiStore, userStore } = useStores();
  const [project, setProject] = useState();
  const [users, setUsers] = useState();
  const [projectOwner, setProjectOwner] = useState(false);

  useEffect(() => {
    const loadOwner = async () => {
      const currentUser = await uiStore.currentUser;
      if (project && currentUser) {
        const projectOwner = project.owners.find((owner) => owner.id === currentUser.id);
        if (projectOwner) {
          setProjectOwner(true);
        } else {
          setProjectOwner(false);
        }
      }
    };
    loadOwner();
  }, [uiStore.currentUser]);

  useEffect(() => {
    const data = convertData.fromJSON(projectJSON, projectStore);
    // const oldData = projectStore.projects.find((project) => project.id === data.id);
    // if (oldData) {
    //   const indexOldData = projectStore.projects.indexOf(oldData);
    //   indexOldData > -1 ? projectStore.removeProject(indexOldData) : false;
    // }
    data.getLikes();
    data.getRequirementsList();
    data.getRequirementsInfo();
    data.getDurvers();
    data.getComments();
    setProject(data);
  }, []);

  useEffect(() => {
    const usersArr = [];
    usersJSON.forEach((userJSON) => {
      const user = convertDataUser.fromJSON(userJSON, userStore);
      usersArr.push(user);
    });
    setUsers(usersArr);

    if (project && uiStore.currentUser) {
      const projectIsLiked = project.likes.find((like) => like.userId === uiStore.currentUser.id);
      if (projectIsLiked) {
        project.setLiked(true);
      } else {
        project.setLiked(false);
      }
    }
  }, [uiStore.currentUser]);

  if (!project) {
    return <p>Project laden...</p>;
  }
  return (
    <>
      <Header />
      {projectOwner && <ProjectEditBanner project={project} />}
      <ProjectHeader project={project} />
      <ProjectContent project={project} users={users} />
      <ProjectFooter project={project} />
      <ProjectComments project={project} comments={project.comments} />
      <Footer />
    </>
  );
});

export const getStaticPaths = async () => {
  const store = new RootStore();
  const { projectStore } = store;
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
  const { projectStore, userStore } = store;

  // PROJECT
  const data = await projectStore.loadProject(params.id);
  let projectJSON = convertData.toJSON(data);
  const updates = data.updates.map((update) => {
    return {
      user: update.user,
      text: update.text,
      timestamp: data.getReadableDate(update.timestamp),
    };
  });
  const timestamp = data.getReadableDate(data.timestamp);

  projectJSON.timestamp = timestamp;
  projectJSON.updates = updates;

  // OWNERS
  const ownersArr = await projectStore.loadProjectOwnersById(params.id);
  const owners = ownersArr.map((owner) => ({
    name: owner.name,
    avatar: owner.avatar,
    id: owner.id,
  }));
  projectJSON['owners'] = owners;

  // USERS
  await userStore.loadAllUsers();
  const usersJSON = userStore.users.map((data) => {
    let user = convertDataUser.toJSON(data);
    return user;
  });

  return {
    props: { projectJSON, usersJSON },
    revalidate: 5,
  };
};

export default Project;
