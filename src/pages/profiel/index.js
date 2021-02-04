import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import { useState, useEffect } from 'react';
import { ROUTES } from '../../consts/index';
import { Container } from '../../components/Layout';
import { Button } from '../../components/UI';
import Header from '../../components/Header/Header';
import styles from './Profile.module.scss';
import { convertData } from '../../models/Project';
import { ProjectCard } from '../../components/Project';

const Profile = observer(() => {
  const { uiStore, projectStore } = useStores();

  const STATE_LOADING = 'loading';
  const STATE_DOES_NOT_EXIST = 'doesNotExist';
  const STATE_LOADING_MORE_DETAILS = 'loadingMoreDetails';
  const STATE_FULLY_LOADED = 'fullyLoaded';

  const [currentUser, setCurrentUser] = useState(uiStore.currentUser);
  const [state, setState] = useState(
    currentUser ? STATE_LOADING_MORE_DETAILS : STATE_LOADING
  );
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const setUser = await uiStore.currentUser;
        if (!setUser) {
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setState(STATE_FULLY_LOADED);
        setCurrentUser(setUser);

        // PROJECTS VAN USER
        uiStore.getProjectsForUser();
        console.log(uiStore.userProjects);

        // PROJECTS LINKEN AAN PROJECTMODEL
        const projectsArr = [];
        uiStore.userProjects.forEach((projectJSON) => {
          const project = convertData.fromJSON(projectJSON, projectStore);
          project.getLikes();
          project.getDurvers();

          console.log('rrrrr');
          console.log(project);
          projectsArr.push(project);
        });
        setProjects(projectsArr);
      } catch (error) {
        console.log('User failed loading');
      }
    };
    loadUser();
  }, [uiStore.currentUser, setProjects]);

  console.log(projects);

  return (
    <>
      <Header />
      {currentUser ? (
        <>
          <div className={styles.profile}>
            <Container>
              <div className={styles.profile__wrapper}>
                <img
                  className={styles.avatar}
                  width="80"
                  height="80"
                  src={currentUser.avatar}
                />
                <div>
                  <p className={styles.name}>{currentUser.name}</p>
                  <p className={styles.email}>{currentUser.email}</p>
                </div>
              </div>
              <div className={styles.projects}>
                <h1 className={styles.title}>Projecten</h1>
                {projects.length != 0 ? (
                  <>
                    {projects.map((project) => (
                      <div key={project.id}>
                        <ProjectCard key={project.id} project={project} />
                        <Button
                          href={ROUTES.edit.to + project.id}
                          text={'Bewerk project'}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <p>Geen eigen projecten</p>
                )}
              </div>
              <div className={styles.badges}>
                <h1 className={styles.title}>Badges &amp; Awards</h1>
              </div>
            </Container>
          </div>
        </>
      ) : (
        ' '
      )}
    </>
  );
});

export default Profile;
