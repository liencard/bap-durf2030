import styles from './Header.module.scss';
import Link from 'next/link';
import { Container } from '../Layout';
import BtnPrim from '../Button/Button';

const Header = () => {
  return (
    <>
      <Container>
        <div className={styles.header}>
          <div className={styles.header__left}>
            <img src="/logo.svg" alt="logo DURF2030" width="45" height="60" />
            <nav className={styles.menu}>
              <Link href="/">
                <span className={styles.menu__item}>Alle projecten</span>
              </Link>
              <Link href="/">
                <span className={styles.menu__item}>Kalender</span>
              </Link>
              <Link href="/">
                <span className={styles.menu__item}>Nieuws</span>
              </Link>

              <BtnPrim text="Maak project aan" link="/" />
            </nav>
          </div>
          <div className={styles.header__right}>
            <img
              src="/icons/reminder-dark.svg"
              width="18"
              height="21.5"
              alt="reminder bell icon"
            />
            <Link href="/register">
              <span className={styles.menu__item}>Inloggen</span>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
