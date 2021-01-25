import { useRouter } from 'next/router';
import { ROUTES } from '../../consts/index';
import { Container } from '../../components/Layout';
import styles from './CreateProject.module.scss';
import { Button } from '../../components/UI';
import { FormPartOne, FormPartTwo, FormPartThree, FormPartFour } from '../../components/Create';
import { useState } from 'react';
import { Formiz, useForm, FormizStep } from '@formiz/core';
import { useStores } from '../../hooks/useStores';
import Project from '../../models/Project';
import { v4 } from 'uuid';

const CreateProject = () => {
  const projectForm = useForm();
  const { projectStore, uiStore } = useStores();

  // Uit database halen
  const themes = ['Eeenzaamheid rond corona', 'Ondernemingschap', 'Klimaat', 'Andere'];
  const categories = [
    'Muziek',
    'Sociaal',
    'Kinderen',
    'Kunst',
    'Theater',
    'Technologie',
    'Dans',
    'Audiovisueel',
    'Natuur',
    'Divers',
  ];

  const handleSubmit = async (values) => {
    console.log(values);
    let categoriesWithValues = {};
    let themesWithValues = {};

    categories.forEach((category, i) => {
      const key = category.toLowerCase();
      categoriesWithValues[key] = values.categories[i];
    });

    themes.forEach((theme, i) => {
      const key = theme.toLowerCase();
      themesWithValues[key] = values.themes[i];
    });

    const project = new Project({
      // id: v4(),
      id: 'formtest',
      userId: uiStore.currentUser.id,
      title: values.title,
      intro: values.intro,
      description: values.description,
      isKnownPlace: values.isKnownPlace,
      categories: categoriesWithValues,
      themes: themesWithValues,
      city: values.city ?? '',
      street: values.street ?? '',
      number: values.number ?? '',
      store: projectStore,
    });

    // console.log(project);
    const result = await projectStore.createProject(project);
  };

  return (
    <>
      <div className={styles.create}>
        <Container>
          <div className={styles.image}>Image</div>
          <div className={styles.content}>
            <Formiz connect={projectForm} onValidSubmit={handleSubmit}>
              <form noValidate onSubmit={projectForm.submitStep}>
                <FormizStep name="step1">
                  <FormPartFour />
                </FormizStep>
                <FormizStep name="step2">
                  <FormPartTwo />
                </FormizStep>
                <FormizStep name="step3">
                  <FormPartThree />
                </FormizStep>
                <FormizStep name="step4">
                  <FormPartFour />
                </FormizStep>

                {/* Update the submit button to allow navigation between steps. */}
                {!projectForm.isFirstStep && (
                  <button type="button" onClick={projectForm.prevStep}>
                    Back
                  </button>
                )}
                {projectForm.isLastStep ? (
                  <button type="submit" disabled={!projectForm.isValid}>
                    Submit
                  </button>
                ) : (
                  <button type="submit" disabled={!projectForm.isStepValid}>
                    Continue
                  </button>
                )}
              </form>
            </Formiz>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CreateProject;
