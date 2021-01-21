import styles from './HeroHome.module.scss';
import BtnPrim from '../Button/Button';
import { Container } from '../Layout';

const HeroHome = () => {
  return (
    <>
      <section className={styles.header}>
        <Container>
          <div className={styles.text}>
            <div className={styles.text__wrapper}>
              <p className={styles.subtitle}>
                Voor een cultureel West-Vlaanderen
              </p>
              <h1 className={styles.title}>
                Ben jij een <span className={styles.green}>echte</span>{' '}
                <span className={styles.red}>durver?</span>
              </h1>
              <p className={styles.description}>
                Heb je een xxx idee? Help ons 2.030 projecten te realiseren en
                van Kortrijk een culturele wereldstad te maken.
              </p>
              <div className="btn__wrapper">
                <BtnPrim text="Maak project aan" link="/" />
                <button className={styles.button} href="/">
                  Kom meer te weten
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroHome;
