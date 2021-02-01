import styles from './ProjectFooter.module.scss';
import { Button } from '../../UI';

const ProjectFooter = ({ project }) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.contact}>
          <a href={`mailto:${project.contact}`}>
            <Button text="Mail contactpersoon" />
          </a>
          <p>Stuur een mail naar het contactpersoon van dit project</p>
        </div>

        <p className={styles.date}>17 dagen geleden gepost</p>
      </div>
    </>
  );
};

export default ProjectFooter;
