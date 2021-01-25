import { useState, useEffect } from 'react';
import { useField } from '@formiz/core';
import Switch from '@material-ui/core/Switch';

const FormFieldSwitch = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { label, required, setToggleValue, defaultValue } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setValue(defaultValue);
  }, []);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Switch
      color="primary"
      name={label}
      inputProps={{ 'aria-label': `${label}` }}
      value={value ?? false}
      checked={value ?? defaultValue}
      onChange={(e) => {
        setValue(e.target.checked);
        setToggleValue(e.target.checked);
      }}
    />
  );
};

export default FormFieldSwitch;
