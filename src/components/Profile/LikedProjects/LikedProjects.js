import { observer } from 'mobx-react-lite';
import { Grid } from '../../../components/Layout';
import { ProjectCard } from '../../../components/Project';
import styles from './LikedProjects.module.scss';

const LikedProjects = observer(({ projects }) => {
  return (
    <>
      <div className={styles.projects}>
        <h1 className={styles.title}>Gewaardeerde Projecten</h1>

        {projects ? (
          <Grid>
            {projects.map((project) => (
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
