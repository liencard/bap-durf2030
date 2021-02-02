import { useEffect, useState } from 'react';
import styles from './ProjectHeader.module.scss';
import { Button } from '../../UI';
import { ProjectLikes, ProjectHelpers } from '../../Project';

const ProjectHeader = ({ project, requirements }) => {
  const { projectStore } = useStores();
  const [likes, setLikes] = useState([]);
  const [services, setServices] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [servicesCount, setServicesCount] = useState('');
  const [materialsCount, setMaterialsCount] = useState('');

  useEffect(() => {
    projectStore.loadProjectLikesById('formtest').then((result) => {
      setLikes(result.length);
    });

    let materialsArr = [];
    let servicesArr = [];
    let materialsCount = 0;
    let servicesCount = 0;

    const loadRequirments = async () => {
      requirements.forEach((item) => {
        if (item.type === 'material') {
          materialsArr.push(item);
          setMaterials(materialsArr);
          if (item.completed === true) {
            materialsCount++;
          }
        } else if (item.type === 'service') {
          servicesArr.push(item);
          setServices(servicesArr);
          if (item.completed === true) {
            servicesCount++;
          }
        }
      });
      setMaterialsCount(materialsCount);
      setServicesCount(servicesCount);
    };
    loadRequirments();
  }, [requirements]);

  return (
    <>
      <div className={styles.images}>Images</div>
      <div className={styles.content}>
        <ul className={styles.tags}>
          <li className={styles.tag}>Cultuur</li>
          <li className={styles.tag}>Theater</li>
        </ul>
        <div className={styles.text}>
          <h1 className={styles.title}>{project.title}</h1>
          {project.isKnownPlace && (
            <div className={styles.location}>
              <img src="/icons/location-green.svg" alt="logo DURF2030" width="13.75" height="15.9" />
              <p>
                {project.street} {project.number}, {project.city}
              </p>
            </div>
          )}
          <p className={styles.intro}>{project.intro}</p>
        </div>
        <div className={styles.help}>
          <div className={styles.item}>
            <div className={`${styles.circle} ${styles.service}`} />
            <p className={styles.info}>
              {servicesCount}/{services.length} diensten
            </p>
            <p className={styles.item__btn}>Bekijk info</p>
          </div>
          <div className={styles.item}>
            <div className={`${styles.circle} ${styles.material}`} />
            <p className={styles.info}>
              {materialsCount}/{materials.length} materialen
            </p>
            <p className={styles.item__btn}>Bekijk info</p>
          </div>
          <div className={styles.item}>
            <div className={`${styles.circle} ${styles.money}`} />
            <p className={styles.info}>7/10 geld</p>
            <p className={styles.item__btn}>Bekijk info</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button className={styles.button} text={'Ik durf mee te helpen'} />
          <div className={styles.interact}>
            <ProjectLikes project={project} />
            <ProjectHelpers />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
