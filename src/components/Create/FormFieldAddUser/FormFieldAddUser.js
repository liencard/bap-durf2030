import { useState, useEffect } from 'react';
import { useField } from '@formiz/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useStores } from '../../../hooks/useStores';
import styles from './FormFieldAddUser.module.scss';

const FormFieldAddUser = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { label, required } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  const filter = createFilterOptions();
  const { userStore } = useStores();
  const users = userStore.users;

  const [creators, setCreators] = useState([]);

  const addCreator = (newValue, input) => {
    // newValue = {inputValue: "Test", name: "Voeg "Test" toe"}
    if (input === 'custom') {
      // On hold
      // setCreators([...creators, { name: newValue.inputValue }]);
    } else if (input === 'data') {
      // newValue = User object
      setCreators([...creators, { name: newValue.name, id: newValue.userId }]);
    }
    setValue(creators);
  };

  const removeCreator = (creator) => {
    let newCreators = creators.slice();
    newCreators = newCreators.filter((currentCreator) => {
      return currentCreator !== creator;
    });
    setCreators(newCreators);
    setValue(creators);
  };

  return (
    <>
      {creators.map((creator, i) => {
        return (
          <div key={i} className={styles.item}>
            <div className={styles.text}>
              <p className={styles.name}>{creator.name}</p>
            </div>
            <p
              onClick={() => {
                removeCreator(creator);
              }}
              className={styles.delete}
            >
              verwijder
            </p>
          </div>
        );
      })}

      <Autocomplete
        fullWidth
        // value={value}
        onChange={(event, newValue) => {
          if (newValue && newValue.inputValue) {
            addCreator(newValue, 'custom');
          } else {
            if (newValue) {
              addCreator(newValue, 'data');
            }
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Voeg "${params.inputValue}" toe`,
            });
          }
          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={users}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        renderOption={(option) => option.name}
        freeSolo
        renderInput={(params) => <TextField {...params} fullWidth label="Zoek durver" variant="outlined" />}
      />
    </>
  );
};

export default FormFieldAddUser;
