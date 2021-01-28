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
        //console.log('test');
        //console.log(uiStore.currentUser);
        //const setUser = await uiStore.setCurrentUser('lien@gmail.com');
        const user = await uiStore.currentUser;
        console.log(user);
        if (!user) {
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setState(STATE_FULLY_LOADED);
        setCurrentUser(user);
      } catch (error) {
        console.log('User failed loading');
      }
    };
    loadUser();
  }, [uiStore, setCurrentUser, uiStore.currentUser]);

  // if (uiStore.currentUser) {
  //   console.log(uiStore.currentUser);
  //   console.log(projectStore.projects);
  // }

  return (
    <>
      <Header />
      <div className={styles.profile}>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>State: {state}</p>
        <p>Testname: {currentUser ? currentUser.id : 'nee'}</p>
        <p>test</p>
      </div>
    </>
  );
});

export default Profile;
