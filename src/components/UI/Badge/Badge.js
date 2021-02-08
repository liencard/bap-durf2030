import styles from './Badge.module.scss';

const Badge = ({ text }) => <span className={styles.badge}>{text}</span>;

export default Badge;
