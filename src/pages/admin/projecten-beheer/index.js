import { useStores } from '../../../hooks/useStores';
import { observer } from 'mobx-react-lite';
import { Grid } from '../../../components/Layout';
import styles from './ProjectManagement.module.scss';
import { Button } from '../../../components/UI';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import { DataGrid } from '@material-ui/data-grid';

const ProjectManagement = observer(() => {
  const { projectStore } = useStores();
  const projectAmount = projectStore.projects.length;

  projectStore.loadAllProjects();

  const getState = (state) => {
    switch (state) {
      case 0:
        return 'In afwachting';
      case 1:
        return 'Lopend';
      default:
        return 'Onbekende status';
    }
  };

  let projectList = [];
  let id = 1;
  projectStore.projects.map((project) => {
    //console.log(project);
    const projectState = getState(project.state);
    projectList.push({
      id: id,
      projectName: project.title,
      creationDate: '14 JAN',
      projectStatus: projectState,
      projectContact: project.contact,
    });
    id++;
  });

  //console.log(projectList);

  const handleChangeState = async (data) => {
    const project = await projectStore.getProjectById(data.id);
    project.setState(1);
    const result = await projectStore.updateState(project);
  };

  const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    { field: 'projectName', headerName: 'Project', width: 300 },
    { field: 'creationDate', headerName: 'Indienmoment', width: 150 },
    { field: 'projectStatus', headerName: 'Status', width: 150 },
    {
      field: 'projectContact',
      headerName: 'Contacteer',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <strong>
          <Button>{params.value}</Button>
        </strong>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      projectName: 'Garage ombouwen tot cinema',
      creationDate: '14 JAN 18:30',
      projectStatus: 'Lopend',
      contact: 'contacteer',
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
          <div className={styles.projects}>
            <div className={styles.tabs}>
              <p>Lopend</p>
              <p>Afgerond</p>
              <p>Nieuw</p>
            </div>
            <div className={styles.table}>
              <DataGrid rows={projectList} columns={columns} pageSize={5} />
            </div>

            {/* <div>
              {projectStore.projects.map((project) => (
                <div key={project.id} className={styles.project}>
                  <h2>{project.title}</h2>
                  <p>{getState(project.state)}</p>
                  <button onClick={() => handleChangeState(project)}>
                    aanvaard project
                  </button>
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
});

export default ProjectManagement;
