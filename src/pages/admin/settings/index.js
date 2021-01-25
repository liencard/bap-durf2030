import { useStores } from '../../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { Container } from '../../../components/Layout';
import { Button } from '../../../components/UI';
import styles from './Admin.module.scss';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';

const Settings = observer(() => {
  const { projectStore } = useStores();

  console.log(projectStore.projects);

  return (
    <>
      <div className={styles.admin}>
        <Sidebar />
        <section className={styles.content}>
          <div className={styles.header}>
            <div className={styles.header__left}>
              <h1 className={styles.title}>Projectenbeheer</h1>
            </div>
            <Button text={'Filteren'} />
          </div>
        </section>
      </div>
    </>
  );
});

export default Settings;
