import styles from './OnboardingTwo.module.scss';

const OnboardingTwo = () => {
  return (
    <>
      <h2 className={styles.subtitle}>
        Dit geeft een extra meerwaarde aan het project
      </h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/onboarding/onboarding-4.svg" />
          <p>Het project is toepasbaar in andere contexten.</p>
        </div>
        <div className={styles.item}>
          <img src="/onboarding/onboarding-5.svg" />
          <p>
            Het project is vernieuwend of gebruikt een nieuwe aanpak (geen
            bestaande werking of project).
          </p>
        </div>
        <div className={styles.item}>
          <img src="/onboarding/onboarding-6.svg" />
          <p>
            Samenwerking met partners uit andere sectoren of buiten jouw gekende
            wereld.
          </p>
        </div>
      </div>
    </>
  );
};

export default OnboardingTwo;
