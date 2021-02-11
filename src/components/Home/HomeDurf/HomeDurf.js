import styles from './HomeDurf.module.scss';
import { Grid, Container } from '../../Layout';
import { Button } from '../../UI';

const HomeDurf = () => {
  return (
    <>
      <div className={styles.letters}>
        <Container>
          <section className={styles.about}>
            <h2 className={styles.title}>
              Wat is <span>DURF2030?</span>
            </h2>
            <Grid>
              <div className={styles.content}>
                <p>
                  Als stad en regio Kortrijk worden we geconfronteerd met
                  maatschappelijke uitdagingen die ons socio-economisch weefsel
                  onder druk zetten en onze samenleving doen verkrampen.{' '}
                </p>
                <p>
                  Wij als inwoners, ondernemers, jongeren, (hoge) scholen,
                  kunstenaars, verbinders en veranderaars met een creatieve
                  mindset willen hier een antwoord op bieden. DURF 2030 is een
                  platform waarbinnen we jou willen betrekken om de krachten te
                  bundelen voor een veerkrachtige regio. Via 2.030 projecten
                  tekenen we de komende 10 jaar de contouren van de stad waarvan
                  we durven dromen.
                </p>
                <a href="https://www.durf2030.eu/over-durf2030" target="blank">
                  <Button text="kom meer te weten" />
                </a>
              </div>
              <div className={styles.organisations}>
                <h3 className={styles.subtitle}>Organisaties</h3>
                <p>
                  Diverse organisaties en individuen uit verschillende sectoren
                  bundelen de krachten. Wil je ook deel uitmaken van het
                  platform en meedenken en doen?
                </p>
                <div className={styles.logos}>
                  <img
                    src="/logos/schouwburg.png"
                    width="155"
                    height="50"
                    alt="Logo Schouwburg Kortrijk"
                  />
                  <img
                    src="/logos/buda.png"
                    width="132"
                    height="45"
                    alt="Logo Kunstcentrum Buda"
                  />
                  <img
                    src="/logos/vives.png"
                    width="100"
                    height="45"
                    alt="Logo Vives"
                  />
                  <img
                    src="/logos/ajko.png"
                    width="93"
                    height="40"
                    alt="Logo Ajko"
                  />
                  <img
                    src="/logos/quindo.png"
                    width="120"
                    height="42"
                    alt="Logo Quindo"
                  />
                  <img
                    src="/logos/designregio.png"
                    width="62"
                    height="48"
                    alt="Logo Design Regio"
                  />
                  <img
                    src="/logos/streekfonds.png"
                    width="95"
                    height="54"
                    alt="Logo Streekfonds"
                  />
                  <img
                    src="/logos/stadkortrijk.png"
                    width="138"
                    height="50"
                    alt="Logo Stad Kortrijk"
                  />
                  <img
                    src="/logos/nextfestival.png"
                    width="130"
                    height="55"
                    alt="Logo Next Festival"
                  />
                  <img
                    src="/logos/howest.png"
                    width="110"
                    height="45"
                    alt="Logo Howest"
                  />
                  <img
                    src="/logos/vormingplus.png"
                    width="218"
                    height="45"
                    alt="Logo Vormingplus"
                  />
                </div>
              </div>
            </Grid>
          </section>
        </Container>
      </div>
    </>
  );
};

export default HomeDurf;
