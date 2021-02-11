import { observer } from 'mobx-react-lite';
import styles from './ProjectFooter.module.scss';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { useStores } from '../../../hooks/useStores';

const ProjectFooter = observer(({ project }) => {
  const { uiStore } = useStores();
  return (
    <>
      <div className={styles.footer}>
        <Container className={styles.container}>
          <div className={styles.contact}>
            {!uiStore.currentUser ? (
              <Button text="Mail contactpersoon" />
            ) : (
              <a href={`mailto:${project.contact}`}>
                <Button text="Mail contactpersoon" />
              </a>
            )}
            <p>Stuur een mail naar het contactpersoon van dit project</p>
          </div>
          <p className={styles.date}>{project.timestamp}</p>
        </Container>
      </div>
    </>
  );
});

export default ProjectFooter;
