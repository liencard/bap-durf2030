import styles from './ProjectComments.module.scss';

const ProjectComment = ({ comment, date }) => {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.user}>
          <img className={styles.image} src={comment.user.avatar} alt="profielfoto van gebruiker" />
          <div>
            <p className={styles.name}>{comment.user.name}</p>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
        <p>{comment.content}</p>
      </div>
    </>
  );
};

export default ProjectComment;
