import styles from './ProjectContent.module.scss';
import { ProjectDescription } from '../../Project';
import { Grid } from '../../Layout';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const ProjectContent = () => {
  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar className={styles.appbar} position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Campagne" {...a11yProps(0)} />
          <Tab label="Updates" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className={styles.panel} value={value} index={0}>
        <Grid>
          <ProjectDescription />
        </Grid>
      </TabPanel>
      <TabPanel className={styles.panel} value={value} index={1}>
        <Grid>
          <ProjectDescription />
        </Grid>
      </TabPanel>
    </>
  );
};

export default ProjectContent;
