import { useState } from 'react';
import styles from './FormPartSix.module.scss';
import { FormFieldInput } from '../index';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const FormPartSix = () => {
  return (
    <>
      <h2 className={styles.title}>Samenwerken</h2>
      <p>Laat andere durvers iets meer over jou weten.</p>
      <FormFieldInput multiline name="about" label="Schrijf iets over jezelf" rows={8} required />
      <h3 className={styles.title}>Contactgegevens</h3>
      <p>Via welk e-mail adres kunnen durvers jou contacteren?</p>
      <FormFieldInput name="email" label="E-mail adres" required />
    </>
  );
};

export default FormPartSix;
