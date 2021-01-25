import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import styles from './Admin.module.scss';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';

const Admin = observer(() => {
  const { projectStore } = useStores();
  console.log(projectStore.projects);

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
