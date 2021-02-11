import { observer } from 'mobx-react-lite';
import styles from './Awards.module.scss';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import { AWARDS, BADGES } from '../../../consts';

const Awards = observer(() => {
  return (
    <>
      <div className={styles.admin}>
        <Sidebar />
        <section className={styles.content}>
          <div className={styles.header}>
            <div className={styles.header__left}>
              <h1 className={styles.title}>Badges &amp; Awards</h1>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.award}>
              <h2 className={styles.subtitle}>Awards</h2>
              {AWARDS.map((award, i) => (
                <div key={i} className={styles.list__item}>
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
            <div className={styles.badge}>
              <h2 className={styles.subtitle}>Badges</h2>
              {BADGES.map((badge, i) => (
                <div key={i} className={styles.list__item}>
                  <img
                    className={styles.icon}
                    src={badge.levelOne}
                    alt="icon"
                    width="80"
                    height="80"
                  />
                  <span>{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export default Awards;
