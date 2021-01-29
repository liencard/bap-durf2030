import styles from './FormPartSeven.module.scss';
import { FormFieldFileUpload } from '../';

const FormPartSeven = () => {
  return (
    <>
      <h2 className={styles.title}>Je bent er bijna!</h2>
      <h3 className={styles.subtitle}>Kies een omslagfoto voor je project (optioneel)</h3>
      <p>Selecteer een foto om je project te laten opvallen.</p>
      <FormFieldFileUpload name="image" />
    </>
  );
};

export default FormPartSeven;
