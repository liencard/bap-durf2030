import styles from '../ProjectRequirements/ProjectRequirements.module.scss';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { ProjectCircle } from '../';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProjectRequirementsFunding = ({ project, progress, funding }) => {
  return (
    <>
      <section className={styles.requirement}>
        <Container>
          <ProjectCircle type="funding" progress={progress} large />
          <div className={styles.content}>
            <h2 className={styles.title}>Ingezameld geld</h2>
            <div className={styles.progress}>
              <div className={styles.text}>
                <p>&euro; {funding} ingezameld</p>
                <p>&euro; {project.fundingAmount}</p>
              </div>

              <LinearProgress variant="determinate" value={progress} />
            </div>
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
