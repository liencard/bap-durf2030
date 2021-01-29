import { useState } from 'react';
import { useField } from '@formiz/core';
import TextField from '@material-ui/core/TextField';

const FormFieldInput = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { label, type, required, multiline, rows, InputProps } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <>
      <TextField
        error={showError}
        aria-required={!!required}
        required={required ? true : false}
        fullWidth
        id={label}
        multiline={multiline ? true : false}
        rows={rows ? rows : 3}
        type={type ? type : 'text'}
        label={label}
        variant="outlined"
        value={value ?? ''}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{ ...InputProps }}
        helperText={showError ? 'Dit veld is verplicht' : ''}
      />
    </>
  );
};

export default FormFieldInput;
