import styles from './BadgesAwards.module.scss';
import { useStores } from '../../../hooks/useStores';
import { Grid } from '../../../components/Layout';
import { AWARDS, BADGES } from '../../../consts';

const BadgesAwards = () => {
  const { uiStore } = useStores();

  const awards = AWARDS.map((award) => {
    const earnedAward = uiStore.currentUser.awards.find((userAward) => award.name === userAward.name);
    if (earnedAward) {
      award.earned = true;
    } else {
      award.earned = false;
    }
    return award;
  });

  const badges = BADGES.map((badge) => {
    const earnedBadge = uiStore.currentUser.badges.find((userBadge) => badge.name === userBadge.name);
    if (earnedBadge) {
      badge.earned = true;
    } else {
      badge.earned = false;
    }
    return badge;
  });

  return (
    <>
      <section className={styles.badges__awards}>
        <h1 className={styles.title}>Badges &amp; Awards</h1>
        {uiStore.currentUser && (
          <Grid>
            <section className={styles.badges}>
              <h2 className={styles.subtitle}>Badges</h2>
              <div className={styles.list}>
                {badges.map((badge, i) => (
                  <div key={i} className={`${styles.list__item} ${badge.earned && styles.earned}`}>
                    <img className={styles.icon} src={badge.levelOne} alt="badge" width="80" height="80" />
                    <span>{badge.name} - level 1</span>
                  </div>
                ))}
              </div>
            </section>
            <section className={styles.awards}>
              <h2 className={styles.subtitle}>Awards</h2>
              <div className={styles.list}>
                {awards.map((award, i) => (
                  <div key={i} className={`${styles.list__item} ${award.earned && styles.earned}`}>
                    <img className={styles.icon} src={award.img} alt="award" width="80" height="80" />
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
