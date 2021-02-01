import styles from './ProjectRequirements.module.scss';
import { useEffect } from 'react';
import { useStores } from '../../../hooks/useStores';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { ProjectHelpers } from '../../Project';

const ProjectRequirements = ({ project }) => {
  const { projectStore } = useStores();

  useEffect(() => {
    const loadrequirements = async () => {
      console.log(project.id);
      const result = await projectStore.loadRequirementListById(project.id);
      console.log('result');
      console.log(result);
    };
    loadrequirements();
  }, [projectStore]);

  return (
    <>
      <div className={styles.requirements}>
        <section className={styles.requirement}>
          <Container>
            <div className={`${styles.circle} ${styles.service}`} />
            <div className={styles.content}>
              <h2 className={styles.title}>Diensten</h2>
              <div className={styles.wrapper}>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui
                </p>

                <div className={styles.list}>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit
                  </p>
                </div>
              </div>
              <div className={styles.footer}>
                <ProjectHelpers />
                <Button text={'Hulp aanbieden'} />
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.requirement}>
          <Container>
            <div className={`${styles.circle} ${styles.material}`} />
            <div className={styles.content}>
              <h2 className={styles.title}>Materiaal</h2>
              <div className={styles.wrapper}>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui
                </p>

                <div className={styles.list}>
                  <article className={styles.list__item}>
                    <h3>Bouwmateriaal</h3>
                    <p>Hamer, ffff, fff</p>
                  </article>
                  <article className={styles.list__item}>
                    <h3>Knutselmateriaal</h3>
                    <p>Borstel, verf, schaar</p>
                  </article>
                </div>
              </div>
              <div className={styles.footer}>
                <ProjectHelpers />
                <Button text={'Hulp aanbieden'} />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default ProjectRequirements;
