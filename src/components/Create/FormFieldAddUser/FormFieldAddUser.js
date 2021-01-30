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

  const [owners, setOwners] = useState([]);

  const addOwner = (newValue, input) => {
    // newValue = {inputValue: "Test", name: "Voeg "Test" toe"}
    if (input === 'custom') {
      // On hold
      // setOwners([...owners, { name: newValue.inputValue }]);
    } else if (input === 'data') {
      // newValue = User object
      console.log(newValue);
      setOwners([...owners, { name: newValue.name, id: newValue.id, avatar: newValue.avatar }]);
      setValue(owners);
    }
  };

  const removeOwner = (owner) => {
    let newOwners = owners.slice();
    newOwners = newOwners.filter((currentOwner) => {
      return currentOwner !== owner;
    });
    setOwners(newOwners);
    setValue(owners);
  };

  return (
    <>
      {owners.map((owner, i) => {
        return (
          <div key={i} className={styles.item}>
            <div className={styles.text}>
              <p className={styles.name}>{owner.name}</p>
            </div>
            <p
              onClick={() => {
                removeOwner(owner);
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
            addOwner(newValue, 'custom');
          } else {
            if (newValue) {
              console.log(newValue);
              addOwner(newValue, 'data');
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
        id="owners"
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
