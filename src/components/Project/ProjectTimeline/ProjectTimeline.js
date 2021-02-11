import styles from './ProjectTimeline.module.scss';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProjectTimeline = ({ state }) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.progressbar}>
        <LinearProgress variant="determinate" value={state * 33.33 - 33.33} />
      </div>
      <ul className={styles.text}>
        <li className={styles.done}>Project is opgezet</li>
        <li className={state > 1 ? styles.done : ''}>Crowdfunding is mogelijk</li>
        <li className={state > 2 ? styles.done : ''}>Klaar om te starten</li>
        <li className={state > 3 ? styles.done : ''}>&#127937;</li>
      </ul>
    </div>
  );
};

export default ProjectTimeline;
