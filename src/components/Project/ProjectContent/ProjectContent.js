import styles from './ProjectContent.module.scss';
import { ProjectDescription, ProjectRequirements, ProjectDurvers, ProjectShare, ProjectUpdates } from '../../Project';
import { Container } from '../../Layout';
import { useState } from 'react';
import { TabPanel, AppBar, TabSideElement, Badge } from '../../UI';
import Tab from '@material-ui/core/Tab';

const ProjectContent = ({ project, users }) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <AppBar value={value} setValue={setValue}>
        <Tab label="Overview" />
        <Tab
          label={
            <div className={styles.updates}>
              <span>Updates</span> <Badge text={project.updates.length} />
            </div>
          }
        />
        <Tab label="Nodige Hulp" />
        <Tab label="Durvers" />
        <TabSideElement>
          <ProjectShare />
        </TabSideElement>
      </AppBar>

      <TabPanel className={styles.panel} value={value} index={0}>
        <Container>
          <ProjectDescription project={project} users={users} />
        </Container>
      </TabPanel>
      <TabPanel className={styles.panel} value={value} index={1}>
        <Container>
          <ProjectUpdates updates={project.updates} />
        </Container>
      </TabPanel>
      <TabPanel className={styles.panel} value={value} index={2}>
        <Container>
          <ProjectRequirements project={project} />
        </Container>
      </TabPanel>
      <TabPanel className={styles.panel} value={value} index={3}>
        <Container>
          <ProjectDurvers project={project} />
        </Container>
      </TabPanel>
    </>
  );
};

export default ProjectContent;
