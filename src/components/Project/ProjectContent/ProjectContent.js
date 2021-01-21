import styles from './ProjectContent.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProjectDescription } from '../../Project';
import { Grid } from '../../Layout';

const ProjectContent = () => {
  return (
    <>
      <Tabs className={styles.tabs}>
        <TabList className={styles.tabs__list}>
          <Tab className={styles.tab}>Campagne</Tab>
          <Tab className={styles.tab}>Updates</Tab>
        </TabList>
        <div className={styles.tabs__content}>
          <TabPanel className={styles.tabs__panel}>
            <Grid>
              <ProjectDescription />
            </Grid>
          </TabPanel>
          <TabPanel>
            <h2>Updates</h2>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default ProjectContent;
