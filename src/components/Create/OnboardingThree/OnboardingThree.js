import styles from './OnboardingThree.module.scss';

const OnboardingThree = () => {
  return (
    <>
      <h2 className={styles.subtitle}>Klaar om te starten?</h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/icons/like-default.svg" />
          <p>
            Start met het aanmaken van je project, geen nood, alles wat je schrijft ga je nadien nog kunnen aanpassen.{' '}
          </p>
        </div>
        <div className={styles.item}>
          <img src="/icons/like-default.svg" />
          <p>
            Na het delen van je project zal je idee gerievewed worden, na goedkeuring wordt deze zichtbaar gezet op het
            plaform.
          </p>
        </div>
      </div>
    </>
  );
};

export default OnboardingThree;
