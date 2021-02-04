import { useEffect, useState } from 'react';
import styles from './EditRequirements.module.scss';
import { EditPart, EditLabel, EditItemIcons, EditField } from '..';
import { FormFieldInput, FormFieldSelect, FormFieldAddItem } from '../../Create';
import { SERVICETYPES, MATERIALTYPES } from '../../../consts';
import InputAdornment from '@material-ui/core/InputAdornment';

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
    project.updateRequirementDetails(values);
  };

  const handleSaveMaterials = (values) => {
    updateItems(values.materials, project.materials, 'material');
    project.updateRequirementDetails(values);
  };

  const handleSaveFunding = (values) => {
    project.updateRequirementDetails(values);
  };

  return (
    <>
      <EditPart title="Diensten" handleSaveProject={handleSaveServices}>
        <EditField>
          <EditLabel text="Leg het doel uit" htmlFor="servicesDescription" />
          <FormFieldInput
            defaultValue={project.servicesDescription}
            multiline
            rows={5}
            name="servicesDescription"
            required
          />
        </EditField>
        <EditField>
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
        </EditField>
      </EditPart>

      <EditPart title="Materialen" handleSaveProject={handleSaveMaterials}>
        <EditField>
          <EditLabel text="Leg het doel uit" htmlFor="materialsDescription" />
          <FormFieldInput
            defaultValue={project.materialsDescription}
            multiline
            rows={5}
            name="materialsDescription"
            required
          />
        </EditField>
        <EditField>
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
        </EditField>
      </EditPart>

      <EditPart title="Donatie" handleSaveProject={handleSaveFunding}>
        <EditField>
          <EditLabel text="Leg het doel uit" htmlFor="fundingDescription" />
          <FormFieldInput
            defaultValue={project.fundingDescription}
            multiline
            rows={5}
            name="fundingDescription"
            required
          />
        </EditField>
        <EditField>
          <EditLabel text="Budget" htmlFor="fundingDescription" />
          <FormFieldInput
            defaultValue={project.fundingAmount}
            type="number"
            name="fundingAmount"
            InputProps={{
              inputProps: { min: 1, max: 3000 },
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
            required
          />
        </EditField>
      </EditPart>
    </>
  );
};

export default EditRequirements;
