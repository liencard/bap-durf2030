import styles from './FormPartSix.module.scss';
import { FormFieldInput, FormFieldWrapper } from '../index';

const FormPartSix = () => {
  return (
    <>
      <FormFieldWrapper>
        <h2 className={styles.title}>Achter de schermen</h2>
        <p className={styles.info}>Laat andere durvers iets meer over jullie weten als organisator(en).</p>
        <FormFieldInput multiline name="about" label="Vertel iets meer" rows={8} />
      </FormFieldWrapper>
      <FormFieldWrapper>
        <h3 className={styles.subtitle}>Contact</h3>
        <p className={styles.info}>Via welk e-mail adres kunnen mensen contact opnemen in verband met dit project?</p>
        <FormFieldInput name="contact" label="Email" type="email" required />
      </FormFieldWrapper>
    </>
  );
};

export default FormPartSix;
