import React from 'react';
import { useState, useEffect } from 'react';
import { useStores } from '../../../hooks/useStores';
import Project from '../../../models/Project';
import styles from './EditBasis.module.scss';
import { Button } from '../../UI';

const EditBasis = ({ project }) => {
  const { projectStore } = useStores();
  const [editGeneral, setEditGeneral] = useState(false);
  const [editPicture, setEditPicture] = useState(false);

  const [title, setTitle] = useState(project.title);
  const [intro, setIntro] = useState(project.intro);

  const handleEditGeneral = () => {
    if (editGeneral === false) {
      setEditGeneral(true);
    } else {
      setEditGeneral(false);
    }
  };

  console.log(projectStore.projects);

  const handleSaveGeneral = async (e) => {
    e.preventDefault();
    const projectUpdate = new Project({
      id: 'EvDOFkxAcUN6BRCrB7X4',
      title: title,
      intro: intro,
      tags: project.tags,
      state: project.state,
    });
    const result = await projectStore.updateProject(projectUpdate);
  };

  const handleEditPicture = () => {
    if (editPicture === false) {
      setEditPicture(true);
    } else {
      setEditPicture(false);
    }
  };
  return (
    <>
      <section className={styles.status}>
        <h2 className={styles.title}>Status</h2>
        <p>Lorum ipsum</p>
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Algemene Info</h2>
          <div>
            <button className={styles.edit__btn} onClick={handleEditGeneral}>
              {editGeneral ? 'Annuleer' : 'Bewerken'}
            </button>
            {editGeneral ? (
              <Button className={styles.save__btn} onClick={handleSaveGeneral} text={'Bewerking opslaan'} />
            ) : (
              ''
            )}
          </div>
        </div>
        <div className={styles.form__wrapper}>
          <div className={styles.form}>
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
              <input className={styles.form__input} type="text" name="description" placeholder="Beschrijving project" />
            </div>
          </div>
          {editGeneral ? '' : <div className={styles.form__locked}></div>}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Foto's</h2>
          <div>
            <button className={styles.edit__btn} onClick={handleEditPicture}>
              {editPicture ? 'Annuleer' : 'Bewerken'}
            </button>
            {editPicture ? <Button className={styles.save__btn} text={'Bewerking opslaan'} /> : ''}
          </div>
        </div>
        <div className={styles.form__wrapper}>
          <div className={styles.form}>
            <p>fotos</p>
          </div>
          {editPicture ? '' : <div className={styles.form__locked}></div>}
        </div>
      </section>
    </>
  );
};

export default EditBasis;
