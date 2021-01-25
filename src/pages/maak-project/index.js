import { useRouter } from 'next/router';
import { ROUTES } from '../../consts/index';
import { Container } from '../../components/Layout';
import styles from './CreateProject.module.scss';
import { Button } from '../../components/UI';
import { FormOne } from '../../components/Create';
import { useState } from 'react';
import { Formiz, useForm, FormizStep } from '@formiz/core';
import { isEmail } from '@formiz/validations';

const CreateProject = () => {
  const projectForm = useForm();

  const handleSubmit = (values) => {
    console.log(values); // Retrieves values after submit
  };

  return (
    <>
      <div className={styles.create}>
        <Container>
          <div className={styles.image}>Image</div>
          <div className={styles.content}>
            <Formiz connect={projectForm} onValidSubmit={handleSubmit}>
              <form noValidate onSubmit={projectForm.submitStep}>
                {/* STEP 1 */}
                <FormOne />

                {/* STEP 2 */}
                <FormizStep name="step2">
                  {/* <FormField
                    name="email"
                    label="Email"
                    validations={[
                      {
                        rule: isEmail(),
                        message: 'This is not a valid email',
                      },
                    ]}
                  /> */}
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
