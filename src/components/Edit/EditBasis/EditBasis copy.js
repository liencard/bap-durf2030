import React from 'react';
import { useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import Project from '../../../models/Project';
import styles from './EditBasis.module.scss';
import { EditPart } from '../';
import { FormFieldRichTextEditor } from '../../Create';
import { Formiz, useForm, FormizStep } from '@formiz/core';

const EditBasis = ({ project }) => {
  const projectForm = useForm();
  const { projectStore } = useStores();
  const [title, setTitle] = useState(project.title);
  const [intro, setIntro] = useState(project.intro);
  const [description, setDescription] = useState(project.description);

  const handleSaveGeneral = async (e) => {
    e.preventDefault();
    const projectUpdate = new Project({
      id: project.id,
      title: title,
      intro: intro,
      description: description,
    });
    const result = await projectStore.updateProject(projectUpdate);
  };

  const handleSubmit = async (values) => {};

  return (
    <>
      <section className={styles.status}>
        <h2 className={styles.title}>Status</h2>
        <p>Lorum ipsum</p>
      </section>

      <Formiz connect={projectForm} onValidSubmit={handleSubmit}>
        <EditPart title="Algemene Info" handleSave={handleSaveGeneral}>
          <div className={styles.input__wrapper}>
            <label className={styles.form__label} htmlFor="title">
              Title
            </label>
            <input
              className={styles.form__input}
              type="text"
              name="title"
              placeholder="Geef je project een titel"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </div>
          <div className={styles.input__wrapper}>
            <label className={styles.form__label} htmlFor="intro">
              Korte samenvatting
            </label>
            <textarea
              className={styles.form__input}
              type="text"
              name="intro"
              placeholder="Geef een korte beschrijving"
              value={intro}
              onChange={(e) => setIntro(e.currentTarget.value)}
            />
          </div>
          <div className={styles.input__wrapper}>
            <label className={styles.form__label} htmlFor="description">
              Beschrijving
            </label>
            <FormFieldRichTextEditor defaultValue={description} name="description" />
          </div>
        </EditPart>

        <EditPart
          title="Foto's"
          handleSave={handleSaveGeneral} // to change
        >
          <p>fotos</p>
        </EditPart>
      </Formiz>
    </>
  );
};

export default EditBasis;
