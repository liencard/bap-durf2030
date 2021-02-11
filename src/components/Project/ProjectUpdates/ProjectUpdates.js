import styles from './ProjectUpdates.module.scss';
import { ParsedRichText } from '../../UI';

const ProjectUpdates = ({ updates }) => {
  return (
    <>
      <article className={styles.updates}>
        <h2 className="hidden">Updates</h2>
        {updates.length > 0 ? (
          updates.map((update) => (
            <section className={styles.update}>
              <p className={styles.date}>{update.timestamp}</p>
              <div className={styles.text}>
                <ParsedRichText html={update.text} />
                <p className={styles.author}>Geschreven door {update.user.name}</p>
              </div>
            </section>
          ))
        ) : (
          <p>Er werden nog geen updates geplaatst.</p>
        )}
      </article>
    </>
  );
};

export default ProjectUpdates;
