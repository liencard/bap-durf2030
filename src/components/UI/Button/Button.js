import styles from './Button.module.scss';
import Link from 'next/link';

const Button = ({ text, href, onClick, type, variant, disabled }) => {
  if (href) {
    return (
      <Link href={href}>
        <button
          className={`${styles.button} ${variant == 'outline' && styles.buttonOutline} ${
            variant == 'secondary' && styles.buttonSecondary
          }`}
          onClick={onClick}
          disabled={disabled ?? false}
        >
          {text}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        disabled={disabled ?? false}
        className={`${styles.button} ${variant == 'outline' && styles.buttonOutline} ${
          variant == 'secondary' && styles.buttonSecondary
        }`}
        onClick={onClick}
        type={type ? type : 'button'}
      >
        {text}
      </button>
    );
  }
};

export default Button;
