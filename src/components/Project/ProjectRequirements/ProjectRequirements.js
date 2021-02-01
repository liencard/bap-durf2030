import styles from './ProjectRequirements.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import { Container } from '../../Layout';

import {
  ProjectRequirementsServices,
  ProjectRequirementsMaterials,
} from '../../Project';

const ProjectRequirements = ({ project }) => {
  const { projectStore } = useStores();
  const [services, setServices] = useState('');
  const [materials, setMaterials] = useState('');

  useEffect(() => {
    let materialsArr = [];
    let servicesArr = [];

    const loadRequirements = async () => {
      const items = await projectStore.loadRequirementListById(project.id);

      items.forEach((item) => {
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
  }, [projectStore]);

  return (
    <>
      <div className={styles.requirements}>
        {/* DIENSTEN */}
        {services.length != 0 ? (
          <ProjectRequirementsServices services={services} />
        ) : (
          ''
        )}

        {/* MATERIAAL */}
        {materials.length != 0 ? (
          <ProjectRequirementsMaterials materials={materials} />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ProjectRequirements;
