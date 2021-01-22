import styles from './Button.module.scss';

const Button = ({ text, link, onClick }) => (
  <button className={styles.button} onClick={onClick} href={link}>
    {text}
  </button>
);

export default Button;
