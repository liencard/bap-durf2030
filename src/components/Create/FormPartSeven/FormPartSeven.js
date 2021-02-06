import styles from './FormPartSeven.module.scss';
import { FormFieldFileUpload, FormFieldWrapper } from '../';

const FormPartSeven = () => {
  return (
    <>
      <FormFieldWrapper>
        <h2 className={styles.title}>Je bent er bijna!</h2>
        <h3 className={styles.subtitle}>Kies een omslagfoto voor je project (optioneel)</h3>
        <p className={styles.info}>Selecteer een foto om je project te laten opvallen.</p>
        <FormFieldFileUpload name="image" />
      </FormFieldWrapper>
    </>
  );
};

export default FormPartSeven;
