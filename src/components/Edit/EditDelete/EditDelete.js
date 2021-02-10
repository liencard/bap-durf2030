import { useField } from '@formiz/core';
import { useEffect } from 'react';
import styles from './EditDelete.module.scss';

const EditDelete = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);

  useEffect(() => {
    setValue(false);
  }, []);

  return (
    <>
      <button
        className={`${styles.button} ${!value && styles.buttonRed}`}
        onClick={(e) => {
          e.preventDefault();
          setValue(!value);
        }}
      >
        {!value ? 'Project verwijderen' : 'Annuleer'}
      </button>
    </>
  );
};

export default EditDelete;
