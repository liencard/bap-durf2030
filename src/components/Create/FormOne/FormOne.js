import styles from './FormOne.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const FormOne = () => {
  return (
    <>
      <h2 className={styles.subtitle}>Laten we starten met de basis</h2>
      <p>Geef je project een titel</p>
      <form className={styles.form}>
        <TextField
          className={styles.textfield}
          fullWidth
          id="outlined-basic"
          label="Titel"
          variant="outlined"
        />
      </form>
    </>
  );
};

export default FormOne;
