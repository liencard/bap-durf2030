import styles from './ProjectUpdates.module.scss';
import { ParsedRichText } from '../../UI';

const ProjectUpdates = ({ updates }) => {
  return (
    <>
      <div className={styles.updates}>
        {updates.length > 0 ? (
          updates.map((update) => (
            <div className={styles.update}>
              <p className={styles.date}>{update.timestamp}</p>
              <div className={styles.text}>
                <ParsedRichText html={update.text} />
                <p className={styles.author}>Geschreven door {update.user.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Er werden nog geen updates geplaatst.</p>
        )}
      </div>
    </>
  );
};

export default ProjectUpdates;
