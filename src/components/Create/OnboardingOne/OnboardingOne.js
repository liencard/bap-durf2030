import styles from './OnboardingOne.module.scss';

const OnboardingOne = () => {
  return (
    <>
      <h2 className={styles.subtitle}>
        Aan welke criteria moet jouw project voldoen?
      </h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/onboarding/onboarding-1.svg" />
          <p>
            Bij jouw project bertrek je zoveel mogelijk actieve burgers en/of
            creatieve ondernemers.
          </p>
        </div>
        <div className={styles.item}>
          <img src="/onboarding/onboarding-2.svg" />
          <p>Je zet kunst of creativiteit in als tool</p>
        </div>
        <div className={styles.item}>
          <img src="/onboarding/onboarding-3.svg" />
          <p>
            Jouw project zorgt voor een positieve verandering op het leven in
            onze buurt, stad en regio
          </p>
        </div>
      </div>
    </>
  );
};

export default OnboardingOne;
