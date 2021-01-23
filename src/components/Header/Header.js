import React, { useRef } from 'react';
import { useEffect } from 'react';
//import { useStores } from '../hooks/useStores';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from '../UI';
import Logout from '../Logout/Logout';

const Header = () => {
  const headerBanner = useRef();
  //const { uiStore } = useStores();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 300) {
        headerBanner.current.classList.add(styles.header__dark);
      } else {
        headerBanner.current.classList.remove(styles.header__dark);
      }
    };

    if (window.location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    }
  });

  return (
    <>
      <div className={styles.header} ref={headerBanner}>
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

            <Button text="Maak project aan" link="/" />
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
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Header;
