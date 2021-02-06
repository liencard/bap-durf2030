import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import { useState } from 'react';
import { Container, Grid } from '../../components/Layout';
import { TabPanel, AppBar, TabSideElement } from '../../components/UI';
import Header from '../../components/Header/Header';
import styles from './Profile.module.scss';
import {
  LikedProjects,
  OwnProjects,
  OwnAwards,
  BadgesAwards,
} from '../../components/Profile';

import Tab from '@material-ui/core/Tab';

const Profile = observer(() => {
  const { uiStore } = useStores();
  const [value, setValue] = useState(0);

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
                  {uiStore.currentUser.awards.map((award, i) => (
                    <img width="35" height="35" key={i} src={award.img} />
                  ))}
                </span>
                <p className={styles.email}>{uiStore.currentUser.email}</p>
              </div>
            </div>
          )}

          <AppBar value={value} setValue={setValue}>
            <Tab label="Overview" />
            <Tab label="Gewaardeerde projecten" />
            <Tab label="Badges & Awards" />
            <TabSideElement>
              <Tab label="Instellingen" />
            </TabSideElement>
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
            <BadgesAwards />
          </TabPanel>

          <TabPanel className={styles.panel} value={value} index={3}>
            <h1 className={styles.title}>Instellingen</h1>
          </TabPanel>
        </div>
      </Container>
    </>
  );
});

export default Profile;
