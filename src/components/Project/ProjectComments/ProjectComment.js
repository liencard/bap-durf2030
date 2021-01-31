import styles from './ProjectComments.module.scss';

const ProjectComment = ({ comment }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const year = comment.timestamp.toDate().getFullYear();
  const month = months[comment.timestamp.toDate().getMonth()];
  const day = comment.timestamp.toDate().getDate();
  const hour = comment.timestamp.toDate().getHours();
  const minutes = comment.timestamp.toDate().getMinutes();

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.user}>
          <img
            className={styles.image}
            src={comment.user.avatar}
            alt="profielfoto van gebruiker"
          />
          <div>
            <p className={styles.name}>{comment.user.name}</p>
            <p className={styles.date}>
              {day} {month} {year} - {hour}:{minutes}
            </p>
          </div>
        </div>
        <p>{comment.content}</p>
      </div>
    </>
  );
};

export default ProjectComment;
