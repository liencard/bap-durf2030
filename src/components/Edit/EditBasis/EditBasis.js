import React from 'react';
import styles from './EditBasis.module.scss';
import { EditPart } from '../';
import { FormFieldRichTextEditor, FormFieldInput } from '../../Create';

const EditBasis = ({ project }) => {
  const handleSaveProject = async (values) => {
    project.updateProject(values);
  };

  return (
    <>
      <section className={styles.status}>
        <h2 className={styles.title}>Status</h2>
        <p>Lorum ipsum</p>
      </section>

      <EditPart title="Algemene Info" handleSaveProject={handleSaveProject}>
        <div className={styles.input__wrapper}>
          <label className={styles.form__label} htmlFor="title">
            Title
          </label>
          <FormFieldInput defaultValue={project.title} name="title" required />
        </div>
        <div className={styles.input__wrapper}>
          <label className={styles.form__label} htmlFor="intro">
            Korte samenvatting
          </label>
          <FormFieldInput defaultValue={project.intro} name="intro" multiline required />
        </div>
        <div className={styles.input__wrapper}>
          <label className={styles.form__label} htmlFor="description">
            Beschrijving
          </label>
          <FormFieldRichTextEditor defaultValue={project.description} name="description" />
        </div>
      </EditPart>

      <EditPart title="Foto's" handleSaveProject={handleSaveProject}>
        <p>fotos</p>
      </EditPart>

      <EditPart title="Tags" handleSaveProject={handleSaveProject}>
        <p>fotos</p>
      </EditPart>
    </>
  );
};

export default EditBasis;
