import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '../../consts/index';
import { Container } from '../../components/Layout';
import styles from './Admin.module.scss';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';

const Admin = observer(() => {
  const { projectStore, uiStore } = useStores();
  //console.log(projectStore.projects);
  const router = useRouter();

  useEffect(() => {
    //if (uiStore.currentUser.admin === false)
    if (uiStore.currentUser) {
      console.log(uiStore.currentUser);
      //router.push(ROUTES.home);
    } else {
      console.log('welkom admin');
    }
  }, []);

  return (
    <>
      <div className={styles.admin}>
        <Sidebar />
        <section className={styles.content}>
          <h1 className={styles.title}>Home</h1>
        </section>
      </div>
    </>
  );
});

export default Admin;
