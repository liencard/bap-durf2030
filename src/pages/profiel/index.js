import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import { useState, useEffect } from 'react';
import { Container, Grid } from '../../components/Layout';
import Header from '../../components/Header/Header';
import styles from './Profile.module.scss';
import {
  LikedProjects,
  OwnProjects,
  OwnAwards,
} from '../../components/Profile';
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

const Profile = observer(() => {
  const { uiStore } = useStores();
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
      <Header />
      <Container>
        <div className={styles.profile}>
          {uiStore.currentUser && (
            <div className={styles.profile__wrapper}>
              <img
                className={styles.avatar}
                width="80"
                height="80"
                src={uiStore.currentUser.avatar}
              />
              <div>
                <span className={styles.name__wrapper}>
                  <p className={styles.name}>{uiStore.currentUser.name}</p>
                  {uiStore.currentUser.awards.map((award) => (
                    <img width="35" height="35" src={award.img} />
                  ))}
                </span>
                <p className={styles.email}>{uiStore.currentUser.email}</p>
              </div>
            </div>
          )}
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
              <Tab label="Gewaardeerde projecten" {...a11yProps(1)} />
              <Tab label="Badges & Awards" {...a11yProps(2)} />
              <Tab label="Instellingen" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel className={styles.panel} value={value} index={0}>
            <Grid>
              <OwnProjects />
              <OwnAwards />
            </Grid>
          </TabPanel>

          <TabPanel className={styles.panel} value={value} index={1}>
            <LikedProjects />
          </TabPanel>

          <TabPanel className={styles.panel} value={value} index={2}>
            <Grid>
              <div className={styles.badges}>
                <h1 className={styles.title}>Badges &amp; Awards</h1>
              </div>
            </Grid>
          </TabPanel>

          <TabPanel className={styles.panel} value={value} index={3}>
            <Grid>
              <div className={styles.badges}>
                <h1 className={styles.title}>Badges &amp; Awards</h1>
              </div>
            </Grid>
          </TabPanel>
        </div>
      </Container>
    </>
  );
});

export default Profile;
