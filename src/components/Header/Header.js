import React, { useRef } from 'react';
import { useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import BtnPrim from '../Button/Button';

const Header = () => {
  const headerBanner = useRef();

  useEffect(() => {
    console.log(headerBanner);

    // OPTIE 1

    // if (window.location.pathname === '/') {
    //   window.addEventListener('scroll', handleScroll);
    //   console.log(window.location);
    //   headerBanner.current.classList.add(styles.header__dark);
    // } else {
    //   headerBanner.current.classList.remove(styles.header__dark);
    //   window.removeEventListener('scroll', handleScroll);
    // }
    // const handleScroll = () => {
    //   console.log('test');
    // };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos);
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
      {/* <div
        className={url === '/' ? `${styles.header__dark}` : `${styles.header}`}
        ref={headerBanner}
      > */}
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
    </>
  );
};

export default Header;
