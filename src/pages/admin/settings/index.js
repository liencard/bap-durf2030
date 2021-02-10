import { useStores } from '../../../hooks/useStores';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '../../../components/UI';
import styles from './Settings.module.scss';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';

const Settings = observer(() => {
  const { userStore } = useStores();

  userStore.loadAllUsers();
  let adminsArr = [];

  userStore.users.map((user) => {
    if (user.admin === true) {
      adminsArr.push(user);
    }
  });

  const handleDeleteAdmin = (user) => {
    userStore.updateAdmin(false, user);
  };

  return (
    <>
      <div className={styles.admin}>
        <Sidebar />
        <section className={styles.content}>
          <div className={styles.header}>
            <div className={styles.header__left}>
              <h1 className={styles.title}>Instellingen</h1>
            </div>
            <Button text={'Voeg admin toe'} />
          </div>

          <section className={styles.admins__list}>
            <h2 className={styles.subtitle}>Alle admins</h2>
            <div className={styles.users}>
              {adminsArr.map((user) => (
                <div className={styles.user}>
                  <div className={styles.user__info}>
                    <img
                      className={styles.image}
                      src={user.avatar}
                      alt="profile picture of user"
                    />
                    <p>{user.name}</p>
                  </div>
                  <button
                    className={styles.delete}
                    onClick={() => handleDeleteAdmin(user)}
                  >
                    <img src="/icons/delete-red.svg" />
                    <span className="hidden">Verwijder</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
});

export default Settings;
