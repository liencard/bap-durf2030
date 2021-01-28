import { useStores } from '../../../hooks/useStores';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from '../../../components/Layout';
import { Button } from '../../../components/UI';
import styles from './Settings.module.scss';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';

const Settings = observer(() => {
  const { userStore } = useStores();

  //console.log(userStore.users);

  useEffect(() => {
    const loadAdmins = async (users) => {
      try {
        const findAdmins = await userStore.loadAdmins(users);
        //console.log(findAdmins);
      } catch (error) {}
    };
    loadAdmins(userStore.users);
  }, [userStore.users, userStore]);

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
          {/* <div className={styles.users}>
            {findAdmins.map((user) => (
              <div>
                <p>{user.name}</p>
              </div>
            ))}
            ;
          </div> */}
        </section>
      </div>
    </>
  );
});

export default Settings;
