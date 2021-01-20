import styles from './Button.module.scss';

const Button = ({ text, link }) => (
  <button className={styles.button} href={link}>
    {text}
  </button>
);

export default Button;
