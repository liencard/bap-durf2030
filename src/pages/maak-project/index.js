import { useRouter } from 'next/router';
import { ROUTES } from '../../consts/index';
import { Container } from '../../components/Layout';
import styles from './CreateProject.module.scss';
import { Button } from '../../components/UI';
import {
  FormPartOne,
  FormPartTwo,
  FormPartThree,
  FormPartFour,
  FormPartFive,
  FormPartSix,
  FormPartSeven,
} from '../../components/Create';
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

    // projectStore.uploadImage(values.image);

    // let projectFromForm = {};

    // if (values.isKnownPlace) {
    //   projectFromForm[city] = values.city;
    // }

    // if (values.budgetRequirement) {
    //   projectFromForm[budget] = values.budget;
    //   projectFromForm[budgetDescription] = values.budgetDescription;
    // }

    const project = new Project({
      // id: v4(),
      about: values.about,
      budget: parseInt(values.budget) ?? '',
      budgetDescription: values.budgetDescription ?? '',
      budgetRequirement: values.budgetRequirement,
      categories: categoriesWithValues,
      city: values.city ?? '',
      cocreators: values.cocreators ?? [],
      contact: values.contact,
      description: values.description,
      image: values.image,
      intro: values.intro,
      isKnownPlace: values.isKnownPlace,
      materials: values.materials ?? [],
      materialsDescription: values.materialsDescription ?? '',
      materialsRequirement: values.materialsRequirement,
      number: values.number ?? '',
      services: values.services ?? [],
      servicesDescription: values.servicesDescription ?? '',
      servicesRequirement: values.servicesRequirement,
      street: values.street ?? '',
      themes: themesWithValues,
      title: values.title,

      id: 'formtest',
      userId: 'tijdelijk',
      store: projectStore,
    });

    console.log(project);
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
                  <FormPartOne />
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
                <FormizStep name="step5">
                  <FormPartFive />
                </FormizStep>
                <FormizStep name="step6">
                  <FormPartSix />
                </FormizStep>
                <FormizStep name="step7">
                  <FormPartSeven />
                </FormizStep>

                {/* Update the submit button to allow navigation between steps. */}
                <div className={styles.buttons}>
                  {!projectForm.isFirstStep && (
                    <button className={styles.button} type="button" onClick={projectForm.prevStep}>
                      Back
                    </button>
                  )}
                  {projectForm.isLastStep ? (
                    <button className={styles.button} type="submit" disabled={!projectForm.isValid}>
                      Submit
                    </button>
                  ) : (
                    <button
                      className={`${styles.button} ${styles.buttonSubmit}`}
                      type="submit"
                      disabled={!projectForm.isStepValid}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </form>
            </Formiz>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CreateProject;
