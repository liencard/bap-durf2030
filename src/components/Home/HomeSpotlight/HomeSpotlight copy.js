import styles from './HomeSpotlight.module.scss';
import HomeSpotlightItem from '../HomeSpotlightItem/HomeSpotlightItem';
import { Container } from '../../Layout';

const HomeSpotlight = () => {
  return (
    <>
      <Container>
        <section className={styles.spotlight}>
          <Container>
            <div className={styles.spotlight__intro}>
              <h2 className={styles.title}>
                In de <span>spotlight</span>
              </h2>
              <p className={styles.description}>
                Durvers vertellen hun verhaal over hoe hun ideeën werkelijkheid
                worden.
              </p>
              <div className={styles.pagination}>
                <img
                  src="/icons/arrow-dark.svg"
                  width="6"
                  height="10"
                  alt="dark arrow icon left"
                />
                <p>
                  <span>01</span> / 04
                </p>
                <img
                  className={styles.arrow__flipped}
                  src="/icons/arrow-dark.svg"
                  width="6"
                  height="10"
                  alt="dark arrow icon right"
                />
              </div>
            </div>
            <HomeSpotlightItem />
          </Container>
        </section>
      </Container>
    </>
  );
};

export default HomeSpotlight;
