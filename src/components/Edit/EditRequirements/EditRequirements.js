import { useState } from 'react';
import styles from './EditRequirements.module.scss';
import { EditPart, EditLabel, EditItemIcons } from '..';
import { FormFieldInput, FormFieldSelect, FormFieldAddItem } from '../../Create';
import { SERVICESTYPES, MATERIALTYPES } from '../../../consts';

const EditRequirements = ({ project }) => {
  console.log(project.services);
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
          <FormFieldInput defaultValue={project.servicesDescription} multiline rows={5} name="title" required />
        </div>
        <div className={styles.field__wrapper}>
          <div className={styles.label__wrapper}>
            <EditLabel text="Diensten" htmlFor="servicesDescription" />
            <EditItemIcons text="dienst" />
          </div>
          <FormFieldAddItem
            name="services"
            options={SERVICESTYPES}
            textRow
            defaultValue={project.services}
            label="Dienst toevoegen"
          />
        </div>
      </EditPart>

      <EditPart title="Materialen" handleSaveProject={handleSaveProject}>
        <div className={styles.field__wrapper}>
          <EditLabel text="Leg het doel uit" htmlFor="servicesDescription" />
          <FormFieldInput defaultValue={project.servicesDescription} name="title" required />
        </div>
        <div className={styles.field__wrapper}>
          <div className={styles.label__wrapper}>
            <EditLabel text="Materialen" htmlFor="materialsDescription" />
            <EditItemIcons text="materiaal" />
          </div>
          <FormFieldAddItem
            name="services"
            options={MATERIALTYPES}
            textRow
            defaultValue={project.materials}
            label="Materiaal toevoegen"
          />
        </div>
      </EditPart>
    </>
  );
};

export default EditRequirements;
