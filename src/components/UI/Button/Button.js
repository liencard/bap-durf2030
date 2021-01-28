import styles from './Button.module.scss';
import Link from 'next/link';

const Button = ({ text, href, onClick }) => {
  if (href) {
    return (
      <Link href={href}>
        <button className={styles.button} onClick={onClick}>
          {text}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    );
  }
};

export default Button;
