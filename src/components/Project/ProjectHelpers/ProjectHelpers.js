import { observer } from 'mobx-react-lite';
import styles from './ProjectHelpers.module.scss';

const ProjectHelpers = observer(({ small, project }) => {
  const durvers = [
    {
      id: 1,
      img: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <>
      <div className={`${styles.helpers} ${small && styles.small}`}>
        <div className={styles.helpers__pictures}>
          {durvers.slice(0, 3).map((durver) => (
            <div key={durver.id}>
              <img src={durver.img} alt="profielfoto van mede-durver" />
            </div>
          ))}
        </div>
        {durvers.length} durvers
      </div>
    </>
  );
});

export default ProjectHelpers;
