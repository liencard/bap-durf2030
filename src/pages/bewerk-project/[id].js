import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import { useStores } from '../../hooks/useStores';
import { ROUTES } from '../../consts';
import { Container, Grid } from '../../components/Layout';
import { Button, TabPanel } from '../../components/UI';
import { EditBasis, EditRequirements } from '../../components/Edit';
import Header from '../../components/Header/Header';
import styles from './EditProject.module.scss';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const EditProject = observer(({ query }) => {
  const id = query.id;
  const { projectStore } = useStores();
  const [value, setValue] = useState(0);

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
        setState(STATE_FULLY_LOADED);
        setProject(resolvedProject);
      } catch (error) {
        console.log('Project failed loading');
      }
    };
    loadProject(id);
  }, [id, projectStore, setProject]);

  console.log(project);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Container>
        {project && (
          <>
            <section className={styles.edit}>
              <h1 className={styles.title}>Bewerk project</h1>
              <p className={styles.title__project}>{project.title}</p>
              <AppBar
                elevation={0}
                color="transparent"
                className={styles.appbar}
                position="static"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="Basis Informatie" {...a11yProps(0)} />
                  <Tab label="Ondersteuningen" {...a11yProps(1)} />
                  <Tab label="Durvers" {...a11yProps(2)} />
                  <Button
                    className={styles.button}
                    href={ROUTES.home}
                    text={'Update posten'}
                  />
                </Tabs>
              </AppBar>
              <TabPanel className={styles.panel} value={value} index={0}>
                <EditBasis project={project} />
              </TabPanel>
              <TabPanel className={styles.panel} value={value} index={1}>
                <EditRequirements project={project} />
              </TabPanel>
              <TabPanel className={styles.panel} value={value} index={2}>
                <p>Durvers</p>
              </TabPanel>
            </section>
          </>
        )}
      </Container>
    </>
  );
});

EditProject.getInitialProps = ({ query }) => {
  return { query };
};

export default EditProject;
