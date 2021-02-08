import styles from './Footer.module.scss';
import { Container } from '../../components/Layout';
import { ROUTES } from '../../consts/index';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__wrapper}>
          <Container>
            <Link href={ROUTES.home}>
              <img
                src="/logo.svg"
                alt="logo DURF2030"
                width="120"
                height="120"
              />
            </Link>
            <div className={styles.sitemap}>
              <h2 className={styles.title}>Sitemap</h2>
              <Link href={ROUTES.home}>
                <span className={styles.menu__item}>Home</span>
              </Link>
              <Link href="/">
                <span className={styles.menu__item}>Over DURF2030</span>
              </Link>
              <Link href={ROUTES.projects}>
                <span className={styles.menu__item}>Projecten</span>
              </Link>
              <Link href={ROUTES.create}>
                <span className={styles.menu__item}>Project aanmaken</span>
              </Link>
              <Link href="/">
                <span className={styles.menu__item}>Kalender</span>
              </Link>
              <Link href="/">
                <span className={styles.menu__item}>Nieuws</span>
              </Link>
              <Link href="/">
                <span className={styles.menu__item}>Contacteer ons</span>
              </Link>
            </div>
            <div className={styles.contact}>
              <h2 className={styles.title}>Contact</h2>
              <address>Broelkaai 6</address>
              <address>8500 Kortrijk</address>
              <p className={styles.email}>hello@durf2030.euro</p>

              <div className={styles.newsletter}>
                <p>Schrijf je in op onze nieuwsbrief</p>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="E-mailadres"
                  required="required"
                  autoComplete="off"
                />
                <button className={styles.button}>Inschrijven</button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className={styles.subfooter}>
          <div className={styles.socials}>
            <a target="_blank" href="https://www.instagram.com/durf2030/">
              <img
                src="/instagram-footer.svg"
                alt="social instagram logo"
                width="30"
                height="30"
              />
            </a>
            <a target="_blank" href="https://www.facebook.com/Durf2030/">
              <img
                src="/facebook-footer.svg"
                alt="social facebook logo"
                width="30"
                height="30"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/durf2030/"
            >
              <img
                src="/linkedin-footer.svg"
                alt="social linkedin logo"
                width="30"
                height="30"
              />
            </a>
          </div>
          <div className={styles.info}>
            <p>&copy; 2020 - Alle rechten voorbehouden</p>
            <p>
              <span>Gebruiksvoorwaarden </span>
              <span>Toegankelijkheidsverklaring </span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
