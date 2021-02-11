import { useState, useEffect } from 'react';
import styles from './ProjectHelpTwoService.module.scss';
import { useField } from '@formiz/core';
import { FormFieldCheckbox } from '../../Create';

const ProjectHelpTwoService = ({ project, services }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsArr = services.map((service) => {
      return {
        id: service.id,
        name: service.name,
        amount: service.amount,
        count: 0,
      };
    });
    setItems(itemsArr);
  }, []);

  return (
    <>
      <h2 className={styles.title}>Als vrijwilliger aanbieden</h2>
      <p>{project.servicesDescription}</p>

      <fieldset className={styles.services}>
        {items.map((item) => {
          return <FormFieldCheckbox key={item.id} name={`items.${item.id}`} option={item.name} defaultValue={false} />;
        })}
      </fieldset>
    </>
  );
};

export default ProjectHelpTwoService;
