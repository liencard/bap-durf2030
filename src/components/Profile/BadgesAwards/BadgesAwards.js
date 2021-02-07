import styles from './BadgesAwards.module.scss';
import { useStores } from '../../../hooks/useStores';
import { Grid } from '../../../components/Layout';
import { AWARDS } from '../../../consts';

const BadgesAwards = () => {
  const { uiStore } = useStores();

  const awards = AWARDS.map((award) => {
    const earnedAward = uiStore.currentUser.awards.find(
      (userAward) => award.name === userAward.name
    );
    if (earnedAward) {
      award.earned = true;
    } else {
      award.earned = false;
    }
    return award;
  });

  return (
    <>
      <section className={styles.badges__awards}>
        <h1 className={styles.title}>Badges &amp; Awards</h1>
        {uiStore.currentUser && (
          <Grid>
            <section className={styles.badges}>
              <h2 className={styles.subtitle}>Badges</h2>
            </section>
            <section className={styles.awards}>
              <h2 className={styles.subtitle}>Awards</h2>
              <div className={styles.list}>
                {awards.map((award, i) => (
                  <div
                    key={i}
                    className={`${styles.list__item} ${
                      award.earned && styles.earned
                    }`}
                  >
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
            </section>
          </Grid>
        )}
      </section>
    </>
  );
};

export default BadgesAwards;
