import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import styles from './ProjectHelp.module.scss';
import { Modal, Button } from '../../UI';
import { Grid } from '../../Layout';
import { Formiz, useForm, FormizStep } from '@formiz/core';
import {
  ProjectHelpOne,
  ProjectHelpTwoMaterial,
  ProjectHelpTwoFunding,
  ProjectHelpTwoService,
} from '../../Project';

const ProjectHelp = observer(({ info, materials, services }) => {
  const durverForm = useForm();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values) => {
    console.log(values);

    setOpen(false);
  };

  return (
    <>
      <Modal open={open} handleClose={handleClose}>
        <Grid>
          <div className={styles.img}>
            <div />
          </div>

          <div className={styles.text}>
            <Formiz connect={durverForm} onValidSubmit={handleSubmit}>
              <form noValidate onSubmit={durverForm.submitStep}>
                <FormizStep name="step1">
                  <ProjectHelpOne />
                </FormizStep>
                <FormizStep name="step2">
                  <ProjectHelpTwoMaterial info={info} materials={materials} />
                </FormizStep>
                <FormizStep name="step3">
                  <ProjectHelpTwoFunding info={info} />
                </FormizStep>
                <FormizStep name="step4">
                  <ProjectHelpTwoService info={info} services={services} />
                </FormizStep>

                <div className={styles.buttons}>
                  {!durverForm.isFirstStep && (
                    <button
                      className={styles.button}
                      type="button"
                      onClick={durverForm.prevStep}
                    >
                      Vorige
                    </button>
                  )}
                  {durverForm.isLastStep ? (
                    <button
                      className={styles.button}
                      type="submit"
                      disabled={!durverForm.isValid}
                    >
                      Versturen
                    </button>
                  ) : (
                    <button
                      className={`${styles.button} ${styles.buttonSubmit}`}
                      type="submit"
                      disabled={!durverForm.isStepValid}
                    >
                      Volgende
                    </button>
                  )}
                </div>
              </form>
            </Formiz>
          </div>
        </Grid>
      </Modal>
      <Button
        className={styles.button}
        onClick={handleOpen}
        text={'Ik durf mee te helpen'}
      />
    </>
  );
});

export default ProjectHelp;
