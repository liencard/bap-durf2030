import styles from './HomeHero.module.scss';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { useStores } from '../../../hooks/useStores';

const HomeHero = () => {
  const { uiStore } = useStores();
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
                Ben jij een <span className={styles.green}>echte</span>
                <span className={styles.red}>durver?</span>
              </h1>
              <p className={styles.description}>
                Heb je een gek idee? Help ons 2.030 projecten te realiseren en
                van Kortrijk een culturele wereldstad te maken.
              </p>
              <div className="btn__wrapper">
                {!uiStore.currentUser ? (
                  <Button text="Maak project aan" href="/login" />
                ) : (
                  <Button text="Maak project aan" href="/maak-project" />
                )}
                <a href="https://www.durf2030.eu/over-durf2030" target="blank">
                  <button className={styles.button}>Kom meer te weten</button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeHero;
