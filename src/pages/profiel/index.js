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
  const { uiStore } = useStores();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (uiStore.currentUser && projects.length === 0) {
      const loadProjects = async () => {
        await uiStore.getProjectsForUser();
      };
      loadProjects();
    }
  }, [uiStore.currentUser]);

  useEffect(() => {
    const userProjects = uiStore.userProjects;
    setProjects(userProjects);
  }, [uiStore.userProjects]);

  return (
    <>
      <Header />
      {uiStore.currentUser ? (
        <>
          <div className={styles.profile}>
            <Container>
              <div className={styles.profile__wrapper}>
                <img className={styles.avatar} width="80" height="80" src={uiStore.currentUser.avatar} />
                <div>
                  <p className={styles.name}>{uiStore.currentUser.name}</p>
                  <p className={styles.email}>{uiStore.currentUser.email}</p>
                </div>
              </div>
              <div className={styles.projects}>
                <h1 className={styles.title}>Projecten</h1>
                {projects ? (
                  <>
                    {projects.map((project, i) => (
                      <div key={i}>
                        <ProjectCard key={project.id} project={project} />
                        <Button href={ROUTES.edit.to + project.id} text={'Bewerk project'} />
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
