import styles from './ProjectSpotlight.module.scss';
import Link from 'next/link';
import { Grid } from '../../Layout';
import { ProjectCard } from '../../Project';
import { Button } from '../../UI';
import { useStores } from '../../../hooks/useStores';

const ProjectSpotlight = () => {
  const { uiStore } = useStores();
  return (
    <>
      <section className={styles.projecten}>
        <div className={styles.projecten__header}>
          <h2 className={styles.title}>Projecten</h2>
          <Link href="/projecten/">
            <span>Bekijk alle projecten</span>
          </Link>
        </div>
        <Grid>
          {/* Data komt van db nu, dus als prop doorgegeven */}
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
          <Link href="/">
            <a className={styles.card}>
              <div className={styles.thumbnail}></div>
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
