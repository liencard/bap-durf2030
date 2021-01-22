import styles from './ProjectShare.module.scss';

const ProjectShare = () => {
  return (
    <>
      <div className={styles.share}>
        <img src="/icons/share-green.svg" alt="deel project" />
        <p>Delen</p>
      </div>
    </>
  );
};

export default ProjectShare;
