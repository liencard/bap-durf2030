import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './ProjectCircle.module.scss';

const ProjectCircle = ({ type, progress, large, disableProgress }) => {
  return (
    <div
      className={`${styles.progress} 
      ${type === 'service' && styles.progressServices} 
      ${type === 'material' && styles.progressMaterials} 
      ${type === 'funding' && styles.progressFundings}
      ${large && styles.progressLarge}`}
    >
      <CircularProgress
        variant="determinate"
        value={progress ? progress : 0}
        size={large ? 110 : 65}
        thickness={large ? 1.5 : 2.5}
      />
      <CircularProgress
        variant="determinate"
        value={disableProgress ? 0 : 100}
        size={large ? 110 : 65}
        thickness={large ? 1.5 : 2.5}
      />
    </div>
  );
};

export default ProjectCircle;
