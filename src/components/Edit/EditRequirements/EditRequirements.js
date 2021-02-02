import { useState } from 'react';
import styles from './EditRequirements.module.scss';
import { EditPart, EditLabel } from '..';
import { FormFieldInput, FormFieldSelect, FormFieldAddItem } from '../../Create';

const EditRequirements = ({ project }) => {
  const handleSaveProject = (values) => {
    // if (values.categories && values.themes) {
    //   let categoriesWithValues = {};
    //   let themesWithValues = {};
    //   CATEGORIES.forEach((category, i) => {
    //     const key = category.toLowerCase();
    //     categoriesWithValues[key] = values.categories[i];
    //   });
    //   THEMES.forEach((theme, i) => {
    //     const key = theme.toLowerCase();
    //     themesWithValues[key] = values.themes[i];
    //   });
    //   values['categories'] = categoriesWithValues;
    //   values['themes'] = themesWithValues;
    // }
    // project.updateProject(values);
  };

  return (
    <>
      <EditPart title="Diensten" handleSaveProject={handleSaveProject}>
        <div className={styles.field__wrapper}>
          <EditLabel text="Leg het doel uit" htmlFor="servicesDescription" />
          <FormFieldInput defaultValue={project.title} name="title" required />
        </div>
        <FormFieldAddItem name="services" options={['Grafische hulp', 'x', 'y', 'andere']} />
      </EditPart>
    </>
  );
};

export default EditRequirements;
