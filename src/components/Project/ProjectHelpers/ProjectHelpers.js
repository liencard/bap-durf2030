import { observer } from 'mobx-react-lite';
import styles from './ProjectHelpers.module.scss';

const ProjectHelpers = observer(({ small, project }) => {
  return (
    <>
      <div className={`${styles.helpers} ${small && styles.small}`}>
        <div className={styles.helpers__pictures}>
          {project.durvers.slice(0, 3).map((durver) => (
            <div key={durver.timestamp.seconds}>
              <img src={durver.user.avatar} alt="profielfoto van mede-durver" />
            </div>
          ))}
        </div>
        {project.durvers.length} durvers
      </div>
    </>
  );
});

export default ProjectHelpers;
