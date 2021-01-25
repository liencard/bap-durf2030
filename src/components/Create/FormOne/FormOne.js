import { useState } from 'react';
import styles from './FormOne.module.scss';
import { FormizStep } from '@formiz/core';
import { FormFieldInput, FormFieldSelect } from '../index';
import { Grid } from '../../Layout';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const FormOne = () => {
  const [isKnownPlace, setIsKnownPlace] = useState(false);

  return (
    <>
      <h2 className={styles.title}>Laten we starten met de basis</h2>

      {/* Titel */}
      <h3 className={styles.subtitle}>Geef je project een titel</h3>
      <FormFieldInput name="title" label="Titel" required />
      <h3 className={styles.subtitle}>Project plaats</h3>
      <p>
        Een project kan enkel doorgaan in Kortrijk en omstreken. Dit adres dient als startpunt voor je project, dit kan
        je later nog wijzigen.
      </p>

      {/* Plaats */}

      <div className={styles.place}>
        <p>Weet je in welke stad je project doorgaat?</p>
        <div>
          <span className={styles.place__label}>Nee</span>
          <Switch
            color="primary"
            name="isKnownPlace"
            inputProps={{ 'aria-label': 'Ik ken mijn stad' }}
            checked={isKnownPlace}
            onChange={(e) => setIsKnownPlace(e.currentTarget.checked)}
          />
          <span className={styles.place__label}>Ja</span>
        </div>
      </div>

      {/* Steden */}
      {isKnownPlace && (
        <>
          <FormFieldSelect name="city" label="Stad" />
          <Grid>
            <div className={styles.textfield__street}>
              <FormFieldInput name="street" label="Straat (optioneel)" />
            </div>
            <div className={styles.textfield__number}>
              <FormFieldInput name="number" label="Nr (optioneel)" />
            </div>
          </Grid>
        </>
      )}
    </>
  );
};

export default FormOne;
