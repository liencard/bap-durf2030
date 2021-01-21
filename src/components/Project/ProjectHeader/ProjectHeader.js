import styles from './ProjectHeader.module.scss';

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
          <div>Diensten</div>
          <div>Materialen</div>
          <div>Geld</div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
