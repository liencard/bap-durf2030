import { useState } from 'react';
import { useField } from '@formiz/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// https://github.com/ivan-dalmet/formiz/blob/master/examples/src/components/Fields/FieldSelect.tsx
const FormFieldSelect = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { label, required, options, defaultValue } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <div className={`${showError ? 'is-error' : ''}`}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          defaultValue={defaultValue ?? ''}
          value={value ?? ''}
          onChange={(e) => setValue(e.target.value)}
          labelId={id}
          id={id}
          label={label}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default FormFieldSelect;
