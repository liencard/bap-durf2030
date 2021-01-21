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
          <div className={styles.item}>
            <div className={styles.circle} />
            <p>7/10 diensten</p>
            <p>Bekijk info</p>
          </div>
          <div className={styles.item}>Materialen</div>
          <div className={styles.item}>Geld</div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
