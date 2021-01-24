import React, { useRef } from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStores } from '../../hooks/useStores';
import { useRouter } from 'next/router';
import { ROUTES } from '../../consts/index';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from '../UI';

import ButtonUI from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Header = observer(() => {
  const headerBanner = useRef();
  const { uiStore } = useStores();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    const result = await uiStore.logoutUser();
    router.push(ROUTES.home);
  };

  useEffect(() => {
    if (uiStore.currentUser) {
      console.log(uiStore.currentUser);
    } else {
      console.log('no current user');
    }

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
            <Link href="/projecten">
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
          {!uiStore.currentUser ? (
            <Link href="/login">
              <span className={styles.menu__item}>Inloggen</span>
            </Link>
          ) : (
            <>
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4825 15.9408C17.1132 14.7834 16.3289 13.0962 16.3289 11.3072V8.78475C16.3289 5.601 13.9633 2.96837 10.9025 2.52748V1.55243C10.9025 1.05218 10.4956 0.649447 9.99955 0.649447C9.50355 0.645208 9.09657 1.04795 9.09657 1.54819V2.52324C6.03152 2.96837 3.67021 5.601 3.67021 8.78475V11.3072C3.67021 13.0962 2.88593 14.7877 1.51239 15.9492C1.16052 16.2502 0.957031 16.6869 0.957031 17.149C0.957031 18.0223 1.665 18.7302 2.53831 18.7302H17.4608C18.3341 18.7302 19.0421 18.0223 19.0421 17.149C19.0463 16.6869 18.8428 16.2502 18.4825 15.9408Z"
                  fill="#0C1424"
                />
                <path
                  d="M9.99714 22.3506C11.6335 22.3506 13.0071 21.1848 13.3208 19.6375H6.67773C6.99145 21.1848 8.36075 22.3506 9.99714 22.3506Z"
                  fill="#0C1424"
                />
              </svg>
              <div>
                <ButtonUI
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <img
                    className={styles.menu__pfp}
                    src={uiStore.currentUser.avatar}
                    width="50"
                    height="50"
                    alt="Avatvar icoon gebruiker"
                  />
                </ButtonUI>
                <Menu
                  className={styles.submenu}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Mijn profiel</MenuItem>
                  <MenuItem onClick={handleClose}>Instellingen</MenuItem>
                  <MenuItem onClick={handleLogout}>Afmelden</MenuItem>
                </Menu>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
});

export default Header;
