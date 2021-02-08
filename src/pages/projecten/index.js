import { useEffect, useState } from 'react';
import { Container, Grid } from '../../components/Layout';
import { ProjectCard, ProjectRequirementsCard } from '../../components/Project';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RootStore from '../../stores';
import styles from './Projects.module.scss';
import { convertData } from '../../models/Project';
import { useStores } from '../../hooks/useStores';
import { Button, TabPanel, AppBar, TabSideElement } from '../../components/UI';
import Tab from '@material-ui/core/Tab';
import Masonry from 'react-masonry-css';
import LinearProgress from '@material-ui/core/LinearProgress';

const Projects = ({ projectsJSON }) => {
  const { projectStore } = useStores();
  const [projects, setProjects] = useState([]);
  const [milestones, setMilestones] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const projectsArr = projectsJSON.map((projectJSON) => {
      const project = convertData.fromJSON(projectJSON, projectStore);
      project.getLikes();
      project.getRequirementsList();
      project.getRequirementsInfo();
      project.getDurvers();
      return project;
    });
    setProjects(projectsArr);
  }, [setProjects]);

  let milestonesArr = [];

  useEffect(() => {
    projects.forEach((project) => {
      if (project.themes['eenzaamheid rond corona'] === true) {
        milestonesArr.push(project);
        setMilestones(milestonesArr);
      }
    });
  }, [projects]);

  return (
    <>
      <Header />
      <section className={styles.milestones}>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>Samen pakken we eenzaamheid aan</h1>
            <p>
              De coronastorm woedt: we zitten in dezelfde storm maar niet in hetzelfde schuitje. Hoe kunnen we met een
              creatieve mindset hier via kunst en creativiteit een antwoord op bieden? DURF 2030 zoekt naar 40 projecten
              die eenzaamheid rond corona aanpakken.
            </p>
            <div className={styles.milestone__bar}>
              <LinearProgress variant="determinate" value={(milestones.length / 40) * 100} />
              <span>{milestones.length}</span>
            </div>

            <div className={styles.buttons}>
              <Button text={'Bekijk deze projecten'} />
              <Button text={'Kom meer te weten'} variant="outline" />
            </div>
          </div>
        </Container>
      </section>
      <div className={`${styles.line} ${styles.lineTop}`}></div>
      <Container>
        <AppBar reverse value={value} setValue={setValue}>
          <Tab label="Lopende projecten" />
          <Tab label="Afgelopen projecten" />
          <Tab label="Ondersteuningen" />
          <TabSideElement>
            <h1 className={styles.title}>Projecten</h1>
          </TabSideElement>
        </AppBar>
      </Container>
      <div className={`${styles.line} ${styles.lineBottom}`}></div>
      <Container>
        <TabPanel value={value} index={0}>
          <Grid>
            {projects.map((project) => {
              if (project.state != 0 && project.state < 4) {
                return <ProjectCard key={project.id} project={project} />;
              }
            })}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid>
            {projects.map((project) => {
              if (project.state === 4) {
                return <ProjectCard key={project.id} project={project} />;
              }
            })}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Masonry breakpointCols={2} className={styles.masonry} columnClassName={styles.column}>
            {projects.map((project) => {
              if (project.materialsRequired || project.servicesRequired) {
                return <ProjectRequirementsCard key={project.id} project={project} />;
              }
            })}
          </Masonry>
        </TabPanel>
      </Container>
      <Footer />
    </>
  );
};

export const getStaticProps = async (context) => {
  const store = new RootStore();
  const { projectStore } = store;

  await projectStore.loadAllProjects();

  const projectsJSON = projectStore.projects.map((data) => {
    // console.log(data);
    let project = convertData.toJSON(data);
    const timestamp = data.getReadableDate(data.timestamp);
    project.timestamp = timestamp;
    return project;
  });

  return {
    props: { projectsJSON },
  };
};

export default Projects;
