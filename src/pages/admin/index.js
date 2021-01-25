import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { Container } from '../../components/Layout';
import styles from './Admin.module.scss';
import { useState } from 'react';

const Admin = observer(() => {
  const { projectStore } = useStores();

  console.log(projectStore.projects);

  const handleChangeState = async (data) => {
    const project = await projectStore.getProjectById(data.id);
    project.setState(1);
    const result = await projectStore.updateState(project);
  };

  const getState = (state) => {
    switch (state) {
      case 0:
        return 'In afwachting';
      case 1:
        return 'Lopend project';
      default:
        return 'Onbekende status';
    }
  };

  return (
    <>
      <Container>
        <h1 className={styles.title}>Projectenbeheer</h1>
        <div className={styles.projects}>
          {projectStore.projects.map((project) => (
            <div className={styles.project}>
              <h2>{project.title}</h2>
              <p>{getState(project.state)}</p>
              <button onClick={() => handleChangeState(project)}>
                aanvaard project
              </button>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
});

export default Admin;
