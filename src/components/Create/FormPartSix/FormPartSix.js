import styles from './FormPartSix.module.scss';
import { FormFieldInput } from '../index';

const FormPartSix = () => {
  return (
    <>
      <h2 className={styles.title}>Over jezelf</h2>
      <p>Laat andere durvers iets meer over jou weten.</p>
      <FormFieldInput multiline name="about" label="Schrijf iets over jezelf" rows={8} required />
      <h3 className={styles.title}>Durvers toevoegen</h3>
      <p>Contacteer.</p>
      <FormFieldInput name="contact" label="Email" required />
    </>
  );
};

export default FormPartSix;
