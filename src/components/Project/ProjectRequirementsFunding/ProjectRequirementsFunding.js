import styles from '../ProjectRequirements/ProjectRequirements.module.scss';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { ProjectCircle } from '../';

const ProjectRequirementsFunding = ({ project, progress }) => {
  return (
    <>
      <section className={styles.requirement}>
        <Container>
          <ProjectCircle type="funding" progress={progress} large />
          <div className={styles.content}>
            <h2 className={styles.title}>Ingezameld geld</h2>
            <p>--- Loading bar ----</p>
            <p>{project.fundingDescription}</p>
            <div className={styles.footer}>
              <p></p>
              <Button text={'Doneren'} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectRequirementsFunding;
