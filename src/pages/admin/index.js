import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '../../consts/index';
import styles from './Admin.module.scss';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';

const Admin = observer(() => {
  const { projectStore, uiStore } = useStores();
  const router = useRouter();

  const STATE_LOADING = 'loading';
  const STATE_DOES_NOT_EXIST = 'doesNotExist';
  const STATE_LOADING_MORE_DETAILS = 'loadingMoreDetails';
  const STATE_FULLY_LOADED = 'fullyLoaded';

  const [currentUser, setCurrentUser] = useState(uiStore.currentUser);
  const [state, setState] = useState(
    currentUser ? STATE_LOADING_MORE_DETAILS : STATE_LOADING
  );

  useEffect(() => {
    const loadUser = async () => {
      try {
        const setUser = await uiStore.currentUser;
        if (!setUser) {
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setState(STATE_FULLY_LOADED);
        setCurrentUser(setUser);
      } catch (error) {
        console.log('User failed loading');
      }
    };
    loadUser();
  }, [uiStore, setCurrentUser, uiStore.currentUser]);

  return (
    <>
      {currentUser.admin === true ? (
        <>
          <div className={styles.admin}>
            <Sidebar />
            <section className={styles.content}>
              <h1 className={styles.title}>Home</h1>
            </section>
          </div>
        </>
      ) : (
        <div>
          <p>No access</p>
          <p>No access</p>
          <p>No access</p>
          <p>No access</p>
          <p>No access</p>
          <p>No access</p>
          <p>No access</p>
        </div>
      )}
    </>
  );
});

export default Admin;
