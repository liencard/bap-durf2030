import styles from '../Authentication.module.scss';
import { useState } from 'react';
import Link from 'next/link';

import { FormFieldInput } from '../../Create';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const AuthRegisterOrganisation = () => {
  const [value, setValue] = useState('individu');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <p>
        Laat anderen weten of dit account behoort tot een organisatie of
        individu. Projecten die je aanmaakt of aan meehelpt zullen gelinked zijn
        aan dit account.
      </p>
      <h3 className={styles.subtitle}>Ik wil mij registreren</h3>
      <div className={styles.register__team}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="team"
            name="team"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="individu"
              control={<Radio />}
              label="Als individu"
            />
            <FormControlLabel
              value="organisatie"
              control={<Radio />}
              label="Als deel van een organisatie"
            />
          </RadioGroup>
        </FormControl>
      </div>
      {value === 'organisatie' && (
        <div className={styles.organisation__wrapper}>
          <p>Bij welke organisatie behoor je?</p>
          <FormFieldInput name="organisation" label="Organisatie" />
        </div>
      )}
    </>
  );
};

export default AuthRegisterOrganisation;
