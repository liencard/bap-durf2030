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
  const { uiStore } = useStores();

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
        uiStore.getProjectsForUser();
        console.log('project array');
        console.log(uiStore.userProjects);
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
                {uiStore.userProjects.length != 0 ? (
                  <>
                    {uiStore.userProjects.map((project) => (
                      <div key={project.id}>
                        <ProjectCard
                          key={project.id}
                          title={project.data.title}
                          intro={project.data.intro}
                          id={project.id}
                        />
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
