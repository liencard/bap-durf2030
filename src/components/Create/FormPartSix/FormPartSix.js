import { useState } from 'react';
import styles from './FormPartSix.module.scss';
import { FormFieldInput } from '../index';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const FormPartSix = () => {
  return (
    <>
      <h2 className={styles.title}>Samenwerken</h2>
      <p>
        Deel mee met wie je gaat samenwerken. Dit is een opsomming van individuen, organisaties, bedrijven, waarmee jij
        dit project wilt uitvoeren. Heb je die nog niet? Geen probleem dan zoeken we samen naar de juiste partners voor
        jouw project.
      </p>
      <h3 className={styles.title}>Durvers toevoegen</h3>
      <p>
        Zoek naar bestaande DURF 2030 accounts, dit kunnen leden of teams zijn. Of voeg manueel iemand toe zonder
        account.
      </p>
      <FormFieldInput name="email" label="E-mail adres" required />
    </>
  );
};

export default FormPartSix;
