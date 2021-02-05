import PropTypes from 'prop-types';
import styles from './FormFieldWrapper.module.scss';

const FormFieldWrapper = ({ children }) => {
  return <div className={styles.field}>{children}</div>;
};

FormFieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormFieldWrapper;
