import TextField from '@material-ui/core/TextField';
import styles from './FormTextField.module.scss';

const FormTextField = ({ onChange, label, required }) => {
  return (
    <TextField
      required
      className={styles.textfield}
      fullWidth
      id="outlined-basic"
      label={label}
      variant="outlined"
      onChange={onChange}
    />
  );
};

export default FormTextField;
