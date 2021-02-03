import styles from './ProjectContent.module.scss';
import { ProjectDescription, ProjectRequirements } from '../../Project';
import { Grid } from '../../Layout';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-info-${index}`}
      aria-labelledby={`project-info-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

const ProjectContent = ({ project }) => {
  const [value, setValue] = useState(0);

  const a11yProps = (index) => {
    return {
      id: `project-info-${index}`,
      'aria-controls': `project-info-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar
        elevation={0}
        color="transparent"
        className={styles.appbar}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigeer door project"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Updates" {...a11yProps(1)} />
          <Tab label="Nodige Hulp" {...a11yProps(2)} />
          <Tab label="Durvers" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel className={styles.panel} value={value} index={0}>
        <Grid>
          <ProjectDescription project={project} />
        </Grid>
      </TabPanel>
      <TabPanel className={styles.panel} value={value} index={1}>
        <Grid>
          <p>Updates</p>
        </Grid>
      </TabPanel>
      <TabPanel className={styles.panel} value={value} index={2}>
        <Grid>
          <ProjectRequirements project={project} />
        </Grid>
      </TabPanel>
      <TabPanel className={styles.panel} value={value} index={3}>
        <Grid>
          <p>Durvers</p>
        </Grid>
      </TabPanel>
    </>
  );
};

export default ProjectContent;
