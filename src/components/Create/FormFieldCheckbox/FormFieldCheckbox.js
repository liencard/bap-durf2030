import { useState, useEffect } from 'react';
import { useField } from '@formiz/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const FormFieldCheckbox = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { required, defaultValue, option } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setValue(defaultValue ?? false);
  }, []);

  return (
    <>
      <FormControlLabel
        key={option}
        control={
          <Checkbox
            color="primary"
            value={value ?? defaultValue}
            checked={value ?? defaultValue}
            onChange={(e) => {
              setValue(e.target.checked);
            }}
          />
        }
        label={option}
      />
    </>
  );
};

export default FormFieldCheckbox;
