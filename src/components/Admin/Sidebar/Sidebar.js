import Link from 'next/link';
import { ROUTES } from '../../../consts/index';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__top}>
          <img src="/logo.svg" alt="logo DURF2030" width="70" height="95" />
          <nav className={styles.menu}>
            <Link href={ROUTES.admin}>
              <a className={`${styles.menu__item} ${router.pathname === '/admin' ? styles.active : ''}`}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.82771 11.4633H1.51465L11.9234 1.05457L22.3322 11.4633H20.0191"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.82715 11.4634V19.5591C3.82715 20.1725 4.07084 20.7609 4.50463 21.1947C4.93841 21.6285 5.52675 21.8721 6.14021 21.8721H17.7055C18.319 21.8721 18.9073 21.6285 19.3411 21.1947C19.7749 20.7609 20.0186 20.1725 20.0186 19.5591V11.4634"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.45312 21.8721V14.9329C8.45312 14.3195 8.69682 13.7311 9.1306 13.2974C9.56439 12.8636 10.1527 12.6199 10.7662 12.6199H13.0792C13.6927 12.6199 14.281 12.8636 14.7148 13.2974C15.1486 13.7311 15.3923 14.3195 15.3923 14.9329V21.8721"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Home</span>
              </a>
            </Link>
            <Link href={ROUTES.adminProjects}>
              <a
                className={`${styles.menu__item} ${router.pathname === '/admin/projecten-beheer' ? styles.active : ''}`}
              >
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.92299 1.27136L5.29688 9.36707H14.5491L9.92299 1.27136Z"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.7059 20.9323C17.6221 20.9323 19.1755 19.379 19.1755 17.4628C19.1755 15.5466 17.6221 13.9932 15.7059 13.9932C13.7897 13.9932 12.2363 15.5466 12.2363 17.4628C12.2363 19.379 13.7897 20.9323 15.7059 20.9323Z"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.45355 13.9932H1.82743C1.18869 13.9932 0.670898 14.511 0.670898 15.1497V19.7758C0.670898 20.4145 1.18869 20.9323 1.82743 20.9323H6.45355C7.09228 20.9323 7.61008 20.4145 7.61008 19.7758V15.1497C7.61008 14.511 7.09228 13.9932 6.45355 13.9932Z"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Projectenbeheer</span>
              </a>
            </Link>
            <Link href={ROUTES.admin}>
              <a className={styles.menu__item}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.45355 5.64746H2.98396C2.3705 5.64746 1.78216 5.89116 1.34838 6.32494C0.914595 6.75872 0.670898 7.34706 0.670898 7.96052V18.3693C0.670898 18.9828 0.914595 19.5711 1.34838 20.0049C1.78216 20.4387 2.3705 20.6823 2.98396 20.6823H13.3927C14.0062 20.6823 14.5945 20.4387 15.0283 20.0049C15.4621 19.5711 15.7058 18.9828 15.7058 18.3693V14.8997"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.4541 14.8997H9.92369L19.7542 5.06915C20.2143 4.60905 20.4728 3.98503 20.4728 3.33435C20.4728 2.68368 20.2143 2.05965 19.7542 1.59956C19.2941 1.13946 18.6701 0.880981 18.0194 0.880981C17.3687 0.880981 16.7447 1.13946 16.2846 1.59956L6.4541 11.4301V14.8997Z"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5498 3.33435L18.0194 6.80394"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Content</span>
              </a>
            </Link>
            <Link href={ROUTES.admin}>
              <a className={styles.menu__item}>
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.0003 3.83337H3.00033C1.71166 3.83337 0.666992 4.87804 0.666992 6.16671V20.1667C0.666992 21.4554 1.71166 22.5 3.00033 22.5H17.0003C18.289 22.5 19.3337 21.4554 19.3337 20.1667V6.16671C19.3337 4.87804 18.289 3.83337 17.0003 3.83337Z"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.667 1.5V6.16667"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.33301 1.5V6.16667"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.666992 10.8334H19.3337"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.66634 15.5H5.33301V17.8333H7.66634V15.5Z"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Events</span>
              </a>
            </Link>
            <Link href={ROUTES.adminAwards}>
              <a className={`${styles.menu__item} ${router.pathname === '/admin/awards' ? styles.active : ''}`}>
                <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5 14.875C14.2279 14.875 17.25 11.8529 17.25 8.125C17.25 4.39708 14.2279 1.375 10.5 1.375C6.77208 1.375 3.75 4.39708 3.75 8.125C3.75 11.8529 6.77208 14.875 10.5 14.875Z"
                    stroke="#0C1424"
                    strokeWidth="1.16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.502 14.8788L14.327 21.5039L16.1248 17.8679L20.1726 18.1289L16.3476 11.5038"
                    stroke="#0C1424"
                    strokeWidth="1.16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.65234 11.5038L0.827343 18.1289L4.87518 17.8679L6.67302 21.5039L10.498 14.8788"
                    stroke="#0C1424"
                    strokeWidth="1.16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Badges &amp; Awards</span>
              </a>
            </Link>
            <Link href={ROUTES.admin}>
              <a className={styles.menu__item}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 14L18.4545 10.4545H10.1818C9.86838 10.4545 9.56778 10.33 9.34615 10.1084C9.12451 9.88676 9 9.58616 9 9.27273V2.18182C9 1.86838 9.12451 1.56778 9.34615 1.34615C9.56778 1.12451 9.86838 1 10.1818 1H20.8182C21.1316 1 21.4322 1.12451 21.6539 1.34615C21.8755 1.56778 22 1.86838 22 2.18182V14Z"
                    stroke="#0C1424"
                    strokeWidth="1.16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14.9091V17.2727C14 17.5862 13.8755 17.8868 13.6539 18.1084C13.4322 18.33 13.1316 18.4545 12.8182 18.4545H4.54545L1 22V10.1818C1 9.86838 1.12451 9.56778 1.34615 9.34615C1.56778 9.12451 1.86838 9 2.18182 9H4.54545"
                    stroke="#0C1424"
                    strokeWidth="1.16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Community</span>
              </a>
            </Link>
            <Link href={ROUTES.adminSettings}>
              <a className={`${styles.menu__item} ${router.pathname === '/admin/settings' ? styles.active : ''}`}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.94131 2.99275C10.434 0.961888 13.323 0.961888 13.8157 2.99275C13.8896 3.29785 14.0345 3.58117 14.2386 3.81967C14.4428 4.05817 14.7003 4.24511 14.9903 4.36526C15.2803 4.48542 15.5946 4.53539 15.9076 4.51113C16.2206 4.48686 16.5234 4.38904 16.7914 4.22562C18.576 3.13848 20.6195 5.18091 19.5324 6.96659C19.3692 7.23451 19.2716 7.53715 19.2473 7.84992C19.2231 8.16269 19.2731 8.47675 19.3931 8.76659C19.5131 9.05643 19.6998 9.31386 19.938 9.51796C20.1763 9.72205 20.4593 9.86706 20.7641 9.94119C22.795 10.4339 22.795 13.3229 20.7641 13.8156C20.459 13.8895 20.1757 14.0344 19.9372 14.2385C19.6987 14.4426 19.5118 14.7002 19.3916 14.9902C19.2715 15.2802 19.2215 15.5945 19.2457 15.9075C19.27 16.2205 19.3678 16.5233 19.5313 16.7913C20.6184 18.5758 18.576 20.6194 16.7903 19.5323C16.5224 19.3691 16.2197 19.2714 15.907 19.2472C15.5942 19.223 15.2801 19.2729 14.9903 19.393C14.7004 19.513 14.443 19.6997 14.2389 19.9379C14.0348 20.1761 13.8898 20.4592 13.8157 20.764C13.323 22.7949 10.434 22.7949 9.94131 20.764C9.86739 20.4589 9.72247 20.1756 9.51835 19.9371C9.31424 19.6986 9.05669 19.5116 8.76668 19.3915C8.47666 19.2713 8.16237 19.2214 7.84939 19.2456C7.53641 19.2699 7.23359 19.3677 6.96556 19.5311C5.18103 20.6183 3.13744 18.5758 4.22458 16.7902C4.38777 16.5222 4.48544 16.2196 4.50965 15.9068C4.53386 15.5941 4.48392 15.28 4.36391 14.9902C4.2439 14.7003 4.05719 14.4429 3.81895 14.2388C3.58072 14.0347 3.2977 13.8897 2.99288 13.8156C0.96201 13.3229 0.96201 10.4339 2.99288 9.94119C3.29797 9.86726 3.58129 9.72235 3.81979 9.51823C4.0583 9.31412 4.24523 9.05657 4.36538 8.76655C4.48554 8.47654 4.53551 8.16225 4.51125 7.84927C4.48698 7.53629 4.38916 7.23346 4.22574 6.96543C3.1386 5.18091 5.18103 3.13732 6.96671 4.22446C8.12324 4.92763 9.62211 4.30542 9.94131 2.99275Z"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.8788 15.3479C13.795 15.3479 15.3484 13.7945 15.3484 11.8783C15.3484 9.96214 13.795 8.40875 11.8788 8.40875C9.96257 8.40875 8.40918 9.96214 8.40918 11.8783C8.40918 13.7945 9.96257 15.3479 11.8788 15.3479Z"
                    stroke="#0C1424"
                    strokeWidth="1.15653"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Instellingen</span>
              </a>
            </Link>
          </nav>
        </div>
        <div className={styles.sidebar__bottom}>
          <Link href={ROUTES.home}>
            <a className={styles.back__btn}>
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.8 9.66667L1 5.33333M1 5.33333L5.8 1M1 5.33333H14.2C15.473 5.33333 16.6939 5.78988 17.5941 6.60254C18.4943 7.41519 19 8.51739 19 9.66667C19 10.8159 18.4943 11.9181 17.5941 12.7308C16.6939 13.5435 15.473 14 14.2 14H13"
                  stroke="#2C3E50"
                  strokeWidth="1.16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Naar platform</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
