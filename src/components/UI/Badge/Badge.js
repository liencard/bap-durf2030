import styles from './Badge.module.scss';

const Badge = ({ text }) => <p className={styles.badge}>{text}</p>;

export default Badge;
