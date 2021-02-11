import styles from './HomeSpotlight.module.scss';
import { useState, useEffect } from 'react';
import { Container } from '../../Layout';

const HomeSpotlight = () => {
  const [step, setStep] = useState(0);
  const [content, setContent] = useState({});

  const handleChangeStep = (step) => {
    setStep(step);
  };

  useEffect(() => {
    switch (step) {
      case 0:
        setContent({
          img: '/spotlight/vraagstraat.png',
          change: (
            <>
              <div>
                <h3 className={styles.item__title}>Zeg jij je buren vaak goeiendag? </h3>
                <p className={styles.item__description}>
                  Deze en nog veel andere vragen stelden wij twee weken lang aan vijf Kortrijkse straten.
                </p>
              </div>
              <div className={styles.item__person}>
                <img
                  src="/placeholder/group-howest.jpg"
                  width="50"
                  height="50"
                  alt="Profiel foto van projectbeheerder"
                />
                <div>
                  <p>Howest Team</p>
                  <p>Organisators Vraagstraat</p>
                </div>
              </div>
            </>
          ),
        });
        break;
      case 1:
        setContent({
          img: '/spotlight/doortodoor.png',
          change: (
            <>
              <div>
                <h3 className={styles.item__title}>Door to door</h3>
                <p className={styles.item__description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum maximus ante.
                </p>
              </div>
              <div className={styles.item__person}>
                <img
                  src="/placeholder/group-jan-en-marie.jpg"
                  width="50"
                  height="50"
                  alt="Profiel foto van projectbeheerder"
                />
                <div>
                  <p>Jan en Marie</p>
                  <p>Organisator en deelnemer</p>
                </div>
              </div>
            </>
          ),
        });
        break;
      case 2:
        setContent({
          img: '/spotlight/rope.png',
          change: (
            <>
              <div>
                <h3 className={styles.item__title}>The Rope</h3>
                <p className={styles.item__description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum maximus ante.
                </p>
              </div>
              <div className={styles.item__person}>
                <img
                  src="/placeholder/individual-adam.jpg"
                  width="50"
                  height="50"
                  alt="Profiel foto van projectbeheerder"
                />
                <div>
                  <p>Adam</p>
                  <p>Organisator & kunstenaar</p>
                </div>
              </div>
            </>
          ),
        });
        break;
    }
  }, [step]);

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
                Durvers vertellen hun verhaal over hoe hun ideeën werkelijkheid worden.
              </p>
              <div className={styles.pagination}>
                {step > 0 && (
                  <button onClick={() => handleChangeStep(step - 1)}>
                    <img src="/icons/arrow-dark.svg" width="6" height="10" alt="dark arrow icon left" />
                  </button>
                )}
                <p>
                  <span>0{step + 1}</span> / 03
                </p>
                {step < 2 && (
                  <button onClick={() => handleChangeStep(step + 1)}>
                    <img
                      className={styles.arrow__flipped}
                      src="/icons/arrow-dark.svg"
                      width="6"
                      height="10"
                      alt="dark arrow icon right"
                    />
                  </button>
                )}
              </div>
            </div>
            <div className={styles.spotlight__item}>
              <img
                className={styles.item__banner}
                src={content.img}
                width="336"
                height="355"
                alt="Banner image of spotlighted project"
              />
              <div className={styles.item__text}>{content.change}</div>
            </div>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default HomeSpotlight;
