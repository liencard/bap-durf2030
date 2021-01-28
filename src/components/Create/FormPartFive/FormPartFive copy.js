import { useState } from 'react';
import styles from './FormPartFive.module.scss';
import { FormFieldInput } from '../index';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useStores } from '../../../hooks/useStores';

const FormPartFive = () => {
  const filter = createFilterOptions();
  const { userStore } = useStores();
  const users = userStore.users;

  // const [value, setValue] = useState(null);
  const [creators, setCreators] = useState([{ name: 'Test' }]);

  return (
    <>
      <h2 className={styles.title}>Samenwerken</h2>
      <p>
        Deel mee met wie je gaat samenwerken. Dit is een opsomming van individuen, organisaties, bedrijven, waarmee jij
        dit project wilt uitvoeren. Heb je die nog niet? Geen probleem dan zoeken we samen naar de juiste partners voor
        jouw project.
      </p>
      {creators.map((creator, i) => {
        return <p key={i}>{creator.name}</p>;
      })}
      <h3 className={styles.subtitle}>Durver toevoegen (optioneel)</h3>
      <p>
        Zoek naar bestaande DURF 2030 accounts, dit kunnen leden of teams zijn. Of voeg manueel iemand toe zonder
        account.
      </p>

      {/* <FormFieldInput name="intro" label="Samenvatting" required /> */}
      <Autocomplete
        fullWidth
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue); // User object OF {inputValue: "Test", name: "Voeg "Test" toe"}
          // console.log(newValue.inputValue); // Undefined OF Test
          if (typeof newValue === 'string') {
            // setValue({
            //   name: newValue,
            // });
            //setCreators([...creators, { name: newValue.name }]);
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              name: newValue.inputValue,
            });
            setCreators([...creators, { name: newValue.inputValue }]);
          } else {
            // setValue(newValue);
            if (newValue) {
              setCreators([...creators, { name: newValue.name, id: newValue.id, avatar: newValue.avatar }]);
            } else {
              setValue('');
            }
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          // Suggest the creation of a new value
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
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(option) => option.name}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} fullWidth label="Zoek durver" variant="outlined" />}
      />
    </>
  );
};

export default FormPartFive;
