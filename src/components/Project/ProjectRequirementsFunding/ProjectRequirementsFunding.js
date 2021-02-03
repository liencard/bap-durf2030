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
            <p>{project.fundingDescription}</p>
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
