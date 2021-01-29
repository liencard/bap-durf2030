import styles from './Button.module.scss';
import Link from 'next/link';

const Button = ({ text, href, onClick, type }) => {
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
      <button className={styles.button} onClick={onClick} type={type ? type : 'button'}>
        {text}
      </button>
    );
  }
};

export default Button;
