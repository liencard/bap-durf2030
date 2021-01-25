import { useState } from 'react';
import { useField } from '@formiz/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './FormFieldSelect.module.scss';

// https://github.com/ivan-dalmet/formiz/blob/master/examples/src/components/Fields/FieldSelect.tsx
const FormFieldSelect = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { label, type, required } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <div className={`${showError ? 'is-error' : ''}`}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="stad">Stad</InputLabel>
        <Select
          defaultValue="Kortrijk"
          value={value ?? ''}
          onChange={(e) => setValue(e.target.value)}
          labelId="stad"
          id="stad"
          label="Stad"
        >
          <MenuItem value="Kortrijk">Kortrijk</MenuItem>
          <MenuItem value="Izegem">Izegem</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FormFieldSelect;
