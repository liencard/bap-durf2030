import { useState } from 'react';
import { useField } from '@formiz/core';
import TextField from '@material-ui/core/TextField';
import styles from './FormFieldInput.module.scss';

const FormFieldInput = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { label, type, required } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <div className={`${showError ? 'is-error' : ''}`}>
      <TextField
        aria-required={!!required}
        required={required ? true : false}
        className={styles.textfield}
        fullWidth
        id={label}
        label={label}
        variant="outlined"
        value={value ?? ''}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* <label className="demo-label" htmlFor={id}>
        {label}
        {!!required && ' *'}
      </label>
      <input
        id={id}
        type={type || 'text'}
        value={value ?? ''}
        className="demo-input"
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
      />
      {showError && (
        <div id={`${id}-error`} className="demo-form-feedback">
          {errorMessage}
        </div>
      )} */}
    </div>
  );
};

export default FormFieldInput;
