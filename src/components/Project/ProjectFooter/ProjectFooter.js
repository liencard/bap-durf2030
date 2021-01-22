import styles from './ProjectFooter.module.scss';
import { Button } from '../../UI';
import { ProjectCreatorImage } from '../';

const ProjectFooter = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.creator}>
          <ProjectCreatorImage />
          <div>
            <h3>Organisator</h3>
            <p>Naam Voornaam</p>
          </div>
        </div>
        <Button text="Contacteer" />
        <p className={styles.date}>17 dagen geleden gepost</p>
      </div>
    </>
  );
};

export default ProjectFooter;
