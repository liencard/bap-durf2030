import { useStores } from '../../../hooks/useStores';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ROUTES } from '../../../consts/index';
import Link from 'next/link';
import styles from './ProjectManagement.module.scss';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  TabOverview,
  TabOndersteuning,
  TabOwners,
} from '../../../components/Admin/Content';

const ProjectAdmin = observer(({ query }) => {
  const id = query.id;
  const { projectStore } = useStores();

  // const project = projectStore.getProjectById(query.id);
  // project.getRequirementsInfo();
  // project.getRequirementsList();
  // project.getOwners();
  // project.getDurvers();
  // console.log(project);

  const STATE_LOADING = 'loading';
  const STATE_DOES_NOT_EXIST = 'doesNotExist';
  const STATE_LOADING_MORE_DETAILS = 'loadingMoreDetails';
  const STATE_FULLY_LOADED = 'fullyLoaded';

  const [project, setProject] = useState(projectStore.getProjectById(id));
  const [state, setState] = useState(
    project ? STATE_LOADING_MORE_DETAILS : STATE_LOADING
  );

  useEffect(() => {
    const loadProject = async (id) => {
      try {
        const resolvedProject = await projectStore.loadProject(id);
        if (!resolvedProject) {
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        resolvedProject.getRequirementsInfo();
        resolvedProject.getRequirementsList();
        resolvedProject.getOwners();
        resolvedProject.getDurvers();
        setState(STATE_FULLY_LOADED);
        setProject(resolvedProject);
      } catch (error) {
        console.log('Project failed loading');
      }
    };
    loadProject(id);
  }, [id, projectStore, setProject]);

  return (
    <>
      <div className={styles.admin}>
        <Sidebar />
        {project && (
          <section className={styles.content}>
            <div className={styles.header}>
              <div
                className={`${styles.header__left} ${styles.header__detail}`}
              >
                <h1 className={styles.title}>{project.title}</h1>
                <Link href={ROUTES.adminProjects}>Terug naar overview</Link>
              </div>
            </div>

            <Tabs
              className={styles.container}
              selectedTabClassName={styles.selected}
              selectedTabPanelClassName={styles.table}
            >
              <TabList className={styles.tabs}>
                <Tab className={styles.tab}>
                  <p>Overview</p>
                </Tab>
                <Tab className={styles.tab}>
                  <p>Ondersteuningen</p>
                </Tab>
                <Tab className={styles.tab}>
                  <p>Organisatoren</p>
                </Tab>
              </TabList>

              <div>
                <TabPanel>
                  <TabOverview project={project} />
                </TabPanel>
                <TabPanel>
                  <TabOndersteuning project={project} />
                </TabPanel>
                <TabPanel>
                  <TabOwners project={project} />
                </TabPanel>
              </div>
            </Tabs>
          </section>
        )}
      </div>
    </>
  );
});

ProjectAdmin.getInitialProps = ({ query }) => {
  return { query };
};

export default ProjectAdmin;
