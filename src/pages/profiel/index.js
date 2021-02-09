import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import { useState, useEffect } from 'react';
import { Container, Grid } from '../../components/Layout';
import { TabPanel, AppBar, TabSideElement } from '../../components/UI';
import { Header, Footer } from '../../components/Layout';
import styles from './Profile.module.scss';

import { LikedProjects, OwnProjects, OwnAwards, BadgesAwards } from '../../components/Profile';

import Tab from '@material-ui/core/Tab';

const Profile = observer(() => {
  const { uiStore } = useStores();
  const [userProjects, setUserProjects] = useState([]);
  const [likedProjects, setLikedProjects] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const userLikedProjects = uiStore.userLikedProjects;

    setLikedProjects(userLikedProjects);
  }, [uiStore.userLikedProjects]);

  const setProjectsForUser = (userProjects) => {
    setUserProjects(userProjects);
  };

  useEffect(() => {
    if (uiStore.currentUser && userProjects.length === 0) {
      const loadOwnProjects = async () => {
        await uiStore.getProjectsForUser();
        const userProjectsArr = uiStore.userProjects;
        setProjectsForUser(userProjectsArr);
      };
      loadOwnProjects();
    }

    if (uiStore.currentUser && likedProjects.length === 0) {
      const loadLikedProjects = async () => {
        await uiStore.getLikedProjectsByUser();
      };
      loadLikedProjects();
    }
  }, [uiStore.currentUser]);

  return (
    <>
      <Header />
      <div className={styles.profile}>
        <Container>
          {uiStore.currentUser && (
            <div className={styles.profile__wrapper}>
              <img className={styles.avatar} width="80" height="80" src={uiStore.currentUser.avatar} />
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
        </Container>

        <AppBar value={value} setValue={setValue}>
          <Tab label="Overview" />
          <Tab label="Gewaardeerde projecten" />
          <Tab label="Badges & Awards" />
          <TabSideElement>
            <Tab label="Instellingen" />
          </TabSideElement>
        </AppBar>

        <TabPanel className={styles.panel} value={value} index={0}>
          <Container>
            <OwnProjects projects={userProjects} />
            <OwnAwards />
          </Container>
        </TabPanel>

        <TabPanel className={styles.panel} value={value} index={1}>
          <Container>
            <LikedProjects projects={likedProjects} />
          </Container>
        </TabPanel>

        <TabPanel className={styles.panel} value={value} index={2}>
          <Container>
            <BadgesAwards />
          </Container>
        </TabPanel>

        <TabPanel className={styles.panel} value={value} index={3}>
          <h1 className={styles.title}>Instellingen</h1>
        </TabPanel>
      </div>
      <Footer />
    </>
  );
});

export default Profile;
