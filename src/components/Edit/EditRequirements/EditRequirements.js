import { useEffect, useState } from 'react';
import styles from './EditRequirements.module.scss';
import { EditPart, EditLabel, EditItemIcons } from '..';
import { FormFieldInput, FormFieldSelect, FormFieldAddItem } from '../../Create';
import { SERVICETYPES, MATERIALTYPES } from '../../../consts';

const EditRequirements = ({ project }) => {
  const updateItems = (updatedItems, originalItems, type) => {
    updatedItems.forEach((updatedItem) => {
      if (updatedItem.id) {
        originalItems.forEach((dbItem) => {
          if (updatedItem.id == dbItem.id && updatedItem.amount !== dbItem.amount) {
            // UPDATE
            project.updateRequirementItem(updatedItem, dbItem.id);
          }
        });
      } else {
        // CREATE
        project.createRequirementItem(updatedItem, type);
      }
    });
    originalItems.forEach((dbItem) => {
      const item = updatedItems.find((updatedItem) => updatedItem.id === dbItem.id);
      if (!item) {
        // DELETE
        project.removeRequirementItem(dbItem);
      }
    });
  };

  const handleSaveServices = (values) => {
    updateItems(values.services, project.services, 'service');
  };

  const handleSaveMaterials = (values) => {
    updateItems(values.materials, project.materials, 'material');
  };

  return (
    <>
      <EditPart title="Diensten" handleSaveProject={handleSaveServices}>
        <div className={styles.field__wrapper}>
          <EditLabel text="Leg het doel uit" htmlFor="servicesDescription" />
          <FormFieldInput defaultValue={project.servicesDescription} multiline rows={5} name="title" required />
        </div>
        <div className={styles.field__wrapper}>
          <div className={styles.label__wrapper}>
            <EditLabel text="Diensten" htmlFor="services" />
            <EditItemIcons text="dienst" />
          </div>
          <FormFieldAddItem
            name="services"
            options={SERVICETYPES}
            textRow
            defaultValue={project.services}
            label="Dienst toevoegen"
          />
        </div>
      </EditPart>

      <EditPart title="Materialen" handleSaveProject={handleSaveMaterials}>
        <div className={styles.field__wrapper}>
          <EditLabel text="Leg het doel uit" htmlFor="materialsDescription" />
          <FormFieldInput defaultValue={project.materialsDescription} name="materialsDescription" required />
        </div>
        <div className={styles.field__wrapper}>
          <div className={styles.label__wrapper}>
            <EditLabel text="Materialen" htmlFor="materials" />
            <EditItemIcons text="materiaal" />
          </div>
          <FormFieldAddItem
            name="materials"
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
