import { useRouter } from 'next/router';
import { ROUTES } from '../../consts/index';
import { Container } from '../../components/Layout';
import styles from './CreateProject.module.scss';
import { Button } from '../../components/UI';
import { OnboardingOne, OnboardingTwo, OnboardingThree } from '../../components/Create';
import { useState } from 'react';

const CreateProjectInfo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep != 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleStart = () => {
    router.push(ROUTES.create.start);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <OnboardingOne />;
      case 1:
        return <OnboardingTwo />;
      case 2:
        return <OnboardingThree />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <div className={styles.info}>
        <Container>
          <div className={styles.image__wrapper}>
            <img
              className={styles.image}
              src={`../create/onboarding-${activeStep ? activeStep + 1 : 1}.png`}
              alt="onboarding"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className={styles.title}>Dien jouw projectidee in, hoe zot het ook is</h1>
              <p className={styles.intro}>
                Momenteel loopt een oproep waarbij we projecten rond eenzaamheid stimuleren. Heb jij een ander idee? Dat
                is perfect mogelijk!
              </p>

              {getStepContent(activeStep)}
            </div>
            <div className={styles.navigate}>
              <div className={styles.back}>
                {activeStep !== 0 && <Button variant="secondary" onClick={handleBack} text={'Terug'} />}
              </div>
              <ul className={styles.steps}>
                <li className={`${styles.step} ${activeStep == 0 && styles.active}`} />
                <li className={`${styles.step} ${activeStep == 1 && styles.active}`} />
                <li className={`${styles.step} ${activeStep == 2 && styles.active}`} />
              </ul>
              <div className={styles.next}>
                {activeStep < 2 ? (
                  <Button variant="secondary" onClick={handleNext} text={'Volgende'} />
                ) : (
                  <Button onClick={handleStart} text={'Maak project'} />
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CreateProjectInfo;
