import styles from './ProjectHeader.module.scss';
import Button from '../../Button/Button';
import { ProjectLikes, ProjectHelpers } from '../../Project';

const ProjectHeader = ({ project }) => {
  return (
    <>
      <div className={styles.images}>Images</div>
      <div className={styles.content}>
        <ul className={styles.tags}>
          <li className={styles.tag}>Cultuur</li>
          <li className={styles.tag}>Theater</li>
        </ul>
        <div className={styles.text}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.intro}>{project.intro}</p>
        </div>
        <div className={styles.help}>
          <div className={styles.item}>
            <div className={`${styles.circle} ${styles.service}`} />
            <p className={styles.info}>7/10 diensten</p>
            <p>Bekijk info</p>
          </div>
          <div className={styles.item}>
            <div className={`${styles.circle} ${styles.material}`} />
            <p className={styles.info}>7/10 materialen</p>
            <p>Bekijk info</p>
          </div>
          <div className={styles.item}>
            <div className={`${styles.circle} ${styles.money}`} />
            <p className={styles.info}>7/10 materialen</p>
            <p>Bekijk info</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button className={styles.button} text={'Ik durf mee te helpen'} />
          <div className={styles.interact}>
            <ProjectLikes />
            <ProjectHelpers />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
