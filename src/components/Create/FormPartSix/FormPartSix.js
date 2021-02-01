import styles from './FormPartSix.module.scss';
import { FormFieldInput } from '../index';

const FormPartSix = () => {
  return (
    <>
      <h2 className={styles.title}>Achter de schermen</h2>
      <p>
        Laat andere durvers iets meer over jullie weten als organisator(en).
      </p>
      <FormFieldInput
        multiline
        name="about"
        label="Vertel iets meer"
        rows={8}
      />
      <h3 className={styles.title}>Durvers toevoegen</h3>
      <p>Contacteer.</p>
      <FormFieldInput name="contact" label="Email" required />
    </>
  );
};

export default FormPartSix;
