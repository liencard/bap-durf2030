import styles from './FormPartConfirm.module.scss';

const FormPartConfirm = () => {
  return (
    <>
      <h2 className={styles.title}>Bedankt voor je inzending</h2>
      <p className={styles.info}>
        Alvorens je project live op de website komt, zal deze gerievewed worden door de DURF 2030. Zodra je project werd
        goedgekeurd om gepubliceerd te worden, wordt je op de hoogte gehouden. Alle gegevens kunnen later nog aangepast
        worden.
      </p>
      <p className={styles.info}>
        Benieuwd naar andere projecten? Bekijk projecten van andere durvers die al live staan!
      </p>
    </>
  );
};

export default FormPartConfirm;
