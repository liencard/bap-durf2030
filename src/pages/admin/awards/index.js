import { useStores } from '../../../hooks/useStores';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Awards.module.scss';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import { AWARDS } from '../../../consts';

const Awards = observer(() => {
  const { userStore } = useStores();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(' ');

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
        </section>
      </div>
    </>
  );
});

export default Awards;
