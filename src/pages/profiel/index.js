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
  const [state, setState] = useState(currentUser ? STATE_LOADING_MORE_DETAILS : STATE_LOADING);

  useEffect(() => {
    const loadUser = async () => {
      try {
<<<<<<< HEAD
        //console.log('test');
        //console.log(uiStore.currentUser);
        //const setUser = await uiStore.setCurrentUser('lien@gmail.com');
        const user = await uiStore.currentUser;
        console.log(user);
        if (!user) {
=======
        const setUser = await uiStore.currentUser;
        console.log('user');
        console.log(setUser);
        if (!setUser) {
>>>>>>> c1c79dcd3714034f4a70181aeef6dabb5bb9b95d
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setState(STATE_FULLY_LOADED);
<<<<<<< HEAD
        setCurrentUser(user);
=======
        setCurrentUser(setUser);
        uiStore.getProjectsForUser();
>>>>>>> c1c79dcd3714034f4a70181aeef6dabb5bb9b95d
      } catch (error) {
        console.log('User failed loading');
      }
    };
    loadUser();
  }, [uiStore, setCurrentUser, uiStore.currentUser]);
<<<<<<< HEAD

  // if (uiStore.currentUser) {
  //   console.log(uiStore.currentUser);
  //   console.log(projectStore.projects);
  // }
=======
>>>>>>> c1c79dcd3714034f4a70181aeef6dabb5bb9b95d

  return (
    <>
      <Header />
<<<<<<< HEAD
      <div className={styles.profile}>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>State: {state}</p>
        <p>Testname: {currentUser ? currentUser.id : 'nee'}</p>
        <p>test</p>
      </div>
=======
      {currentUser ? (
        <>
          <div className={styles.profile}>
            <Container>
              <div className={styles.profile__wrapper}>
                <img className={styles.avatar} width="80" height="80" src={currentUser.avatar} />
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
                      <>
                        <ProjectCard key={project.id} title={project.title} intro={project.intro} id={project.id} />
                        <Button href={ROUTES.edit.to + project.id} text={'Bewerk project'} />
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
>>>>>>> c1c79dcd3714034f4a70181aeef6dabb5bb9b95d
    </>
  );
});

export default Profile;
