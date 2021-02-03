import styles from './EditItemIcons.module.scss';

const EditItemIcons = ({ text }) => {
  return (
    <div className={styles.legende}>
      <p className={styles.check}>Markeren als voltooid</p>
      <p className={styles.delete}>Wis {text}</p>
    </div>
  );
};

export default EditItemIcons;
