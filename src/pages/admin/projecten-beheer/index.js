import { useStores } from '../../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import styles from './ProjectManagement.module.scss';
import { Button } from '../../../components/UI';
import { ROUTES } from '../../../consts/index';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import { DataGrid } from '@material-ui/data-grid';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProjectManagement = observer(() => {
  const { projectStore } = useStores();
  const projectAmount = projectStore.projects.length;

  projectStore.loadAllProjects();

  let lopendList = [];
  let doneList = [];
  let newList = [];
  let id = 1;

  // LOPEND
  projectStore.projects.map((project) => {
    if (project.state != 0 && project.state != 4) {
      //const timestamp = project.getReadableDate(project.timestamp);
      lopendList.push({
        id: id,
        projectName: [project.title, project.id],
        creationDate: 'll',
        projectContact: project.contact,
      });
      id++;
    }
  });

  // AFGEROND
  projectStore.projects.map((project) => {
    if (project.state === 4) {
      //const timestamp = project.getReadableDate(project.timestamp);
      doneList.push({
        id: id,
        projectName: [project.title, project.id],
        creationDate: 'rrr',
        projectContact: project.contact,
      });
      id++;
    }
  });

  // NIEUW
  projectStore.projects.map((project) => {
    if (project.state === 0) {
      //const timestamp = project.getReadableDate(project.timestamp);
      newList.push({
        id: id,
        projectName: [project.title, project.id],
        creationDate: 'ff',
        projectContact: project.contact,
      });
      id++;
    }
  });

  const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    {
      field: 'projectName',
      headerName: 'Project',
      width: 450,
      renderCell: (params) => (
        <a>
          <Link href={`${ROUTES.adminProject.to}${params.value[1]}`}>
            <p>{params.value[0]}</p>
          </Link>
        </a>
      ),
    },
    { field: 'creationDate', headerName: 'Indienmoment', width: 200 },
    {
      field: 'projectContact',
      headerName: 'Contacteer',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <a href={`mailto:${params.value}`}>
          <img
            className={styles.icon}
            src="/icons/email.svg"
            alt="email icon"
            width="25"
            height="25"
          />
        </a>
      ),
    },
  ];

  return (
    <>
      <div className={styles.admin}>
        <Sidebar />
        <section className={styles.content}>
          <div className={styles.header}>
            <div className={styles.header__left}>
              <h1 className={styles.title}>Projectenbeheer</h1>
              <span>{projectAmount} resultaten</span>
            </div>
            <Button text={'Filteren'} />
          </div>

          <Tabs
            className={styles.container}
            selectedTabClassName={styles.selected}
            selectedTabPanelClassName={styles.table}
          >
            <TabList className={styles.tabs}>
              <Tab className={styles.tab}>
                <p>Lopend</p>
                <p className={styles.number}>{lopendList.length}</p>
              </Tab>
              <Tab className={styles.tab}>
                <p>Afgerond</p>
                <p className={styles.number}>{doneList.length}</p>
              </Tab>
              <Tab className={styles.tab}>
                <p>Nieuw</p>
                <p className={styles.number}>{newList.length}</p>
              </Tab>
            </TabList>

            <div>
              <TabPanel>
                <DataGrid rows={lopendList} columns={columns} pageSize={10} />
              </TabPanel>

              <TabPanel>
                <DataGrid rows={doneList} columns={columns} pageSize={10} />
              </TabPanel>

              <TabPanel>
                <DataGrid rows={newList} columns={columns} pageSize={10} />
              </TabPanel>
            </div>
          </Tabs>
        </section>
      </div>
    </>
  );
});

export default ProjectManagement;
