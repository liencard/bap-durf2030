import styles from './HomePlatform.module.scss';
import { Grid, Container } from '../../Layout';
import { Button } from '../../UI';
import { useStores } from '../../../hooks/useStores';

const HomePlatform = () => {
  const { uiStore } = useStores();
  return (
    <>
      <div className={styles.letters}>
        <Container>
          <section className={styles.platform}>
            <h2 className={styles.title}>
              Hoe werkt <span>DURF2030?</span>
            </h2>
            <Grid>
              <section className={styles.content}>
                <div className={styles.wrapper}>
                  <img
                    src="lamp.png"
                    width="57"
                    height="70"
                    alt="3D render of a lamp"
                  />
                  <h3 className={styles.subtitle}>Project indienen</h3>
                </div>
                <div className={`${styles.content__color} ${styles.green}`}>
                  <div>
                    <span>1</span>
                    <p>
                      Heb je een idee? Zet je idee om in een project op het
                      platform.
                    </p>
                    <span>2</span>
                    <p>
                      Samen met DURF 2030 en andere gebruikers zullen we jou
                      project laten groeien en helpen met je benodigdheden om je
                      project te realiseren.
                    </p>
                    <span>3</span>
                    <p>
                      Eenmaal je alles hebt en je project door DURF 2030 werd
                      goedgekeurd, staat je project online op deze website.
                    </p>
                  </div>
                  {!uiStore.currentUser ? (
                    <Button text="Maak project aan" href="/projecten" />
                  ) : (
                    <Button text="Maak project aan" href="/maak-project" />
                  )}
                </div>
              </section>
              <section className={styles.content}>
                <div className={styles.wrapper}>
                  <img
                    src="heart.png"
                    width="70"
                    height="70"
                    alt="3D render of a heart"
                  />
                  <h3 className={styles.subtitle}>Project helpen</h3>
                </div>
                <div className={`${styles.content__color} ${styles.yellow}`}>
                  <div>
                    <span>1</span>
                    <p>
                      Wil je een handje helpen? Zoek naar bestaand projecten op
                      het platform.
                    </p>
                    <span>2</span>
                    <p>
                      Ieder project heeft een lijst van benodigdheden waar jij
                      als durver op kan in spelen.
                    </p>
                    <span>3</span>
                    <p>
                      Wordt een echte durver door een handje mee te helpen aan
                      projecten.
                    </p>
                  </div>
                  {!uiStore.currentUser ? (
                    <Button text="Help een project" href="/login" />
                  ) : (
                    <Button text="Help een project" href="/projecten/" />
                  )}
                </div>
              </section>
            </Grid>
          </section>
        </Container>
      </div>
    </>
  );
};

export default HomePlatform;
