import styles from './ProjectRequirements.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import {
  ProjectRequirementsServices,
  ProjectRequirementsMaterials,
  ProjectRequirementsFunding,
} from '../../Project';
import { SettingsOutlined } from '@material-ui/icons';

const ProjectRequirements = ({ project, info, requirements }) => {
  const { projectStore } = useStores();
  const [services, setServices] = useState([]);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    let materialsArr = [];
    let servicesArr = [];

    const loadRequirements = async () => {
      requirements.forEach((item) => {
        if (item.type === 'material') {
          materialsArr.push(item);
          setMaterials(materialsArr);
        } else if (item.type === 'service') {
          servicesArr.push(item);
          setServices(servicesArr);
        }
      });
    };
    loadRequirements();
  }, [projectStore, setMaterials, setServices]);

  return (
    <>
      <div className={styles.requirements}>
        {/* CROWDFUNDING */}
        {info.fundingDetails.required ? (
          <ProjectRequirementsFunding info={info} />
        ) : (
          ''
        )}
        {/* DIENSTEN */}
        {services.length != 0 ? (
          <ProjectRequirementsServices services={services} info={info} />
        ) : (
          ''
        )}
        {/* MATERIAAL */}
        {materials.length != 0 ? (
          <ProjectRequirementsMaterials materials={materials} info={info} />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ProjectRequirements;
