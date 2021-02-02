import styles from '../ProjectRequirements/ProjectRequirements.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { ProjectHelpers } from '..';

const ProjectRequirementsFunding = ({ project }) => {
  const { projectStore } = useStores();

  return (
    <>
      <section className={styles.requirement}>
        <Container>
          <div className={`${styles.circle} ${styles.money}`} />
          <div className={styles.content}>
            <h2 className={styles.title}>Ingezameld geld</h2>
            <p>--- Loading bar ----</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className={styles.footer}>
              <ProjectHelpers />
              <Button text={'Doneren'} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectRequirementsFunding;
