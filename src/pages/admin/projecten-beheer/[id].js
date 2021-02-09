import { useStores } from '../../../hooks/useStores';
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
  const { projectStore } = useStores();

  const project = projectStore.getProjectById(query.id);
  project.getRequirementsInfo();
  project.getRequirementsList();
  project.getOwners();
  project.getDurvers();
  console.log(project);

  return (
    <>
      <div className={styles.admin}>
        <Sidebar />
        <section className={styles.content}>
          <div className={styles.header}>
            <div className={`${styles.header__left} ${styles.header__detail}`}>
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
      </div>
    </>
  );
});

ProjectAdmin.getInitialProps = ({ query }) => {
  return { query };
};

export default ProjectAdmin;
