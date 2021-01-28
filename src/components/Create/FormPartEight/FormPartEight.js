import { useState } from 'react';
import { FormFieldFileUpload } from '../';
import { useStores } from '../../../hooks/useStores';
import styles from './FormPartEight.module.scss';

const FormPartEight = () => {
  // const userId = uiStore.currentUser.userId;
  return (
    <>
      <h2 className={styles.title}>Je bent er bijna!</h2>
      <h3 className={styles.subtitle}>Kies een omslagfoto voor je project (optioneel)</h3>
      <p>Selecteer een foto om je project te laten opvallen.</p>
      <FormFieldFileUpload name="image" />
    </>
  );
};

export default FormPartEight;
