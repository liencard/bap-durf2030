import { ROUTES } from '../../../consts/index';
import styles from './HeaderForm.module.scss';
import Link from 'next/link';

const HeaderForm = () => {
  return (
    <div className={styles.header}>
      <Link href={ROUTES.home}>
        <img className={styles.logo} src="/logo.svg" alt="logo DURF2030" width="60" height="80" />
      </Link>
      <button className={styles.close}>Annuleer</button>
    </div>
  );
};

export default HeaderForm;
