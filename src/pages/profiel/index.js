import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import { useState, useEffect } from 'react';
import { ROUTES } from '../../consts/index';
import { Container } from '../../components/Layout';
import { Button } from '../../components/UI';
import Header from '../../components/Header/Header';
import styles from './Profile.module.scss';
import { ProjectCard } from '../../components/Project';

const Profile = observer(() => {
  const { projectStore, uiStore } = useStores();

  const STATE_LOADING = 'loading';
  const STATE_DOES_NOT_EXIST = 'doesNotExist';
  const STATE_LOADING_MORE_DETAILS = 'loadingMoreDetails';
  const STATE_FULLY_LOADED = 'fullyLoaded';

  const [currentUser, setCurrentUser] = useState(uiStore.currentUser);
  const [state, setState] = useState(
    currentUser ? STATE_LOADING_MORE_DETAILS : STATE_LOADING
  );

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
        projectStore.getProjectsForUser();
      } catch (error) {
        console.log('User failed loading');
      }
    };
    loadUser();
  }, [uiStore, setCurrentUser, uiStore.currentUser]);

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
                {projectStore.projects.length != 0 ? (
                  <>
                    {projectStore.projects.map((project) => (
                      <>
                        <ProjectCard
                          key={project.id}
                          title={project.title}
                          intro={project.intro}
                          id={project.id}
                        />
                        <Button
                          href={ROUTES.edit.to + project.id}
                          text={'Bewerk project'}
                        />
                      </>
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
