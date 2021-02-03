import styles from './EditLabel.module.scss';

const EditLabel = ({ htmlFor, text }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default EditLabel;
