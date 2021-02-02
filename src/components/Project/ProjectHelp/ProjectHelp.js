import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import styles from './ProjectHelp.module.scss';
import { Modal, Button } from '../../UI';
import { Grid } from '../../Layout';
import Durver from '../../../models/Durver';
import { Formiz, useForm, FormizStep } from '@formiz/core';
import {
  ProjectHelpOne,
  ProjectHelpTwoMaterial,
  ProjectHelpTwoFunding,
  ProjectHelpTwoService,
  ProjectHelpThree,
} from '../../Project';

const ProjectHelp = observer(({ project, info, materials, services }) => {
  const durverForm = useForm();
  const { projectStore, uiStore } = useStores();
  const [open, setOpen] = useState(false);
  const [servicesRequired, setServicesRequired] = useState(false);
  const [materialsRequired, setMaterialsRequired] = useState(false);
  const [fundingRequired, setFundingRequired] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values) => {
    console.log(values);

    const newDurver = new Durver({
      amount: 2,
      message: values.message ?? '',
      user: uiStore.currentUser,
      name: 'hamer',
    });

    console.log(newDurver);
    console.log(project.id);

    await projectStore.createDurver(newDurver, project.id);

    //setOpen(false);
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
                  <ProjectHelpOne
                    setFundingRequired={setFundingRequired}
                    fundingRequired={fundingRequired}
                    setMaterialsRequired={setMaterialsRequired}
                    materialsRequired={materialsRequired}
                    setServicesRequired={setServicesRequired}
                    servicesRequired={servicesRequired}
                  />
                </FormizStep>
                {materialsRequired && (
                  <FormizStep name="step2">
                    <ProjectHelpTwoMaterial info={info} materials={materials} />
                  </FormizStep>
                )}
                {servicesRequired && (
                  <FormizStep name="step3">
                    <ProjectHelpTwoService info={info} services={services} />
                  </FormizStep>
                )}
                {fundingRequired && (
                  <FormizStep name="step4">
                    <ProjectHelpTwoFunding info={info} />
                  </FormizStep>
                )}
                <FormizStep name="step5">
                  <ProjectHelpThree />
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
