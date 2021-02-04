import styles from './EditField.module.scss';

const EditField = ({ children, row }) => {
  return <div className={`${styles.field__wrapper} ${row && styles.field__wrapperRow}`}>{children}</div>;
};

export default EditField;
