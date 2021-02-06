import { observer } from 'mobx-react-lite';
import { useStores } from '../../../hooks/useStores';
import styles from './OwnAwards.module.scss';

const OwnAwards = observer(() => {
  const { uiStore } = useStores();

  return (
    <>
      <div className={styles.awards}>
        <h1 className={styles.title}>Behaalde &amp; Awards</h1>
        {uiStore.currentUser && (
          <div className={styles.list}>
            {uiStore.currentUser.awards.map((award) => (
              <div className={styles.list__item}>
                <img
                  className={styles.icon}
                  src={award.img}
                  alt="icon"
                  width="80"
                  height="80"
                />
                <span>{award.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
});

export default OwnAwards;
