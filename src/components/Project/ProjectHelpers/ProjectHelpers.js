import styles from './ProjectHelpers.module.scss';

const ProjectHelpers = () => {
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
      <div className={styles.helpers}>
        <div className={styles.helpers__pictures}>
          {durvers.slice(0, 3).map((durver) => (
            <div key={durver.id}>
              <img src={durver.img} alt="profielfoto van mede-durver" />
            </div>
          ))}
        </div>
        + 8 durvers
      </div>
    </>
  );
};

export default ProjectHelpers;
