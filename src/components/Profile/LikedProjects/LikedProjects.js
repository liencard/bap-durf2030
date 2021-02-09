import { observer } from 'mobx-react-lite';
import { useStores } from '../../../hooks/useStores';
import { useState, useEffect } from 'react';
import { Grid } from '../../../components/Layout';
import { ProjectCard } from '../../../components/Project';
import styles from './LikedProjects.module.scss';

const LikedProjects = observer(() => {
  const { uiStore } = useStores();
  const [likedProjects, setLikedProjects] = useState([]);

  useEffect(() => {
    if (uiStore.currentUser && likedProjects.length === 0) {
      const loadLikedProjects = async () => {
        await uiStore.getLikedProjectsByUser();
      };
      loadLikedProjects();
    }
  }, [uiStore.currentUser]);

  useEffect(() => {
    const userLikedProjects = uiStore.userLikedProjects;
    console.log(userLikedProjects);
    setLikedProjects(userLikedProjects);
  }, [uiStore.userLikedProjects]);

  return (
    <>
      <div className={styles.projects}>
        <h1 className={styles.title}>Gewaardeerde Projecten</h1>

        {likedProjects ? (
          <Grid>
            {likedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        ) : (
          <p>Je hebt nog geen projecten gewaardeerd</p>
        )}
      </div>
    </>
  );
});

export default LikedProjects;
