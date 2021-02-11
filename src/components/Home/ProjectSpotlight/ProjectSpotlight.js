import styles from './ProjectSpotlight.module.scss';
import Link from 'next/link';
import { Grid } from '../../Layout';
import { ProjectCard } from '../../Project';
import { Button } from '../../UI';
import { useStores } from '../../../hooks/useStores';
import { ROUTES } from '../../../consts';

const ProjectSpotlight = ({ projects }) => {
  const { uiStore } = useStores();
  return (
    <>
      <section className={styles.projecten}>
        <div className={styles.projecten__header}>
          <h2 className={styles.title}>Projecten in de kijker</h2>
          <Button text="Bekijk alle projecten" variant="secondary" href={ROUTES.projects} />
        </div>
        <Grid>
          {projects.map((project) => {
            if (project.highlight === true) {
              return <ProjectCard key={project.id} project={project} />;
            }
          })}
          <Link href="/">
            <a className={styles.card}>
              <div className={styles.thumbnail}>
                <img className={styles.image} src="/placeholder.png" alt="project header image" />
              </div>
              <div className={styles.content}>
                <div className={styles.content__wrapper}>
                  <h3 className={styles.title}>Jouw project</h3>
                  {!uiStore.currentUser ? (
                    <Button text="Maak project aan" href="/login" />
                  ) : (
                    <Button text="Maak project aan" href="/maak-project" />
                  )}
                </div>
              </div>
            </a>
          </Link>
        </Grid>
      </section>
    </>
  );
};

export default ProjectSpotlight;
