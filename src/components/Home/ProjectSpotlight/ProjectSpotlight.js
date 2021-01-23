import styles from './ProjectSpotlight.module.scss';
import Link from 'next/link';
import { Container } from '../../Layout';
import { ProjectCard } from '../../Project';
import BtnPrim from '../../Button/Button';

const ProjectSpotlight = () => {
  return (
    <>
      <section className={styles.projecten}>
        <div className={styles.projecten__header}>
          <h2 className={styles.title}>Projecten</h2>
          <Link href="/projects/">
            <span>Bekijk alle projecten</span>
          </Link>
        </div>
        <Container>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <Link href="/">
            <a className={styles.card}>
              <div className={styles.thumbnail}></div>
              <div className={styles.content}>
                <div className={styles.content__wrapper}>
                  <h3 className={styles.title}>Jouw project</h3>
                  <BtnPrim text="Maak project aan" link="/" />
                </div>
              </div>
            </a>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default ProjectSpotlight;
