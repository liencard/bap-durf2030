import styles from './HomeSpotlightItem.module.scss';

const HomeSpotlightItem = () => {
  return (
    <>
      <div className={styles.test}>
        <img
          className={styles.item__banner}
          src="/spotlight-temp.png"
          width="336"
          height="355"
          alt="Banner image of spotlighted project"
        />
        <div className={styles.item__text}>
          <h3 className={styles.item__title}>Lien durft</h3>
          <p className={styles.item__description}>
            een showroom cinema te maken van haar oude garage Lorem ipsum nog
            tekst.
          </p>
          <div className={styles.item__person}>
            <img
              src="/pfp-temp.jpg"
              width="66"
              height="66"
              alt="Profiel foto van projectbeheerder"
            />
            <div>
              <p>Lien Cardoen</p>
              <p>Lorum ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSpotlightItem;
