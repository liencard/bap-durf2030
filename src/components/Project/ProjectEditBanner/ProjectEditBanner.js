import styles from './ProjectEditBanner.module.scss';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { ROUTES } from '../../../consts/index';

const ProjectEditBanner = ({ project }) => {
  return (
    <>
      <div className={styles.banner}>
        <p>
          Jij bent organisator van dit project. Je project kan je ten alle tijden bewerken, zo hou je iedereen op de
          hoogte hoe je project groeit.
        </p>
        <div>
          <Button text="Bewerk project" href={ROUTES.edit.to + project.id} />
          <Button text="Post update" variant="outline" href={ROUTES.edit.to + project.id} />
        </div>
      </div>
    </>
  );
};

export default ProjectEditBanner;
