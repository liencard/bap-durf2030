import styles from './ProjectContent.module.scss';
import {
  ProjectDescription,
  ProjectRequirements,
  ProjectDurvers,
  ProjectShare,
} from '../../Project';
import { Container } from '../../Layout';
import { useState } from 'react';
import { TabPanel, AppBar, TabSideElement } from '../../UI';
import Tab from '@material-ui/core/Tab';

const ProjectContent = ({ project, users }) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className={`${styles.line} ${styles.lineTop}`}></div>
      <Container>
        <AppBar value={value} setValue={setValue}>
          <Tab label="Overview" />
          <Tab label="Updates" />
          <Tab label="Nodige Hulp" />
          <Tab label="Durvers" />
          <TabSideElement>
            <ProjectShare />
          </TabSideElement>
        </AppBar>
      </Container>
      <div className={`${styles.line} ${styles.lineBottom}`}></div>

      <TabPanel className={styles.panel} value={value} index={0}>
        <Container>
          <ProjectDescription project={project} users={users} />
        </Container>
      </TabPanel>
      <TabPanel className={styles.panel} value={value} index={1}>
        <Container>
          <p>Updates</p>
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
