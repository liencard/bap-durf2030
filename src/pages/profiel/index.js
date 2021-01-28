import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import { useState, useEffect } from 'react';
import { Container } from '../../components/Layout';
import Header from '../../components/Header/Header';
import styles from './Profile.module.scss';

const Profile = observer(() => {
  const { projectStore, uiStore } = useStores();

  const STATE_LOADING = 'loading';
  const STATE_DOES_NOT_EXIST = 'doesNotExist';
  const STATE_LOADING_MORE_DETAILS = 'loadingMoreDetails';
  const STATE_FULLY_LOADED = 'fullyLoaded';

  const [currentUser, setCurrentUser] = useState(uiStore.currentUser);
  const [state, setState] = useState(currentUser ? STATE_LOADING_MORE_DETAILS : STATE_LOADING);

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
      <Header />
      <div className={styles.profile}>
        {uiStore.currentUser ? (
          <>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>State: {state}</p>
            <p>{uiStore.currentUser.name}</p>
            <p>test</p>
            <p>test</p>
          </>
        ) : (
          ' '
        )}
      </div>
    </>
  );
});

export default Profile;
