import styles from './FormOne.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormTextField } from '../';
import { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { Grid } from '../../Layout';
import Project from '../../../models/Project';
import { useStores } from '../../../hooks/useStores';
import { v4 } from 'uuid';

const FormOne = () => {
  const { projectStore, uiStore } = useStores();
  const [title, setTitle] = useState('');
  const [isKnownPlace, setIsKnownPlace] = useState(false);
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [project, setProject] = useState(null);

  useEffect(() => {
    const newProject = new Project({
      // id: v4(),
      id: 'formtest',
      title: 'default',
      userId: uiStore.currentUser.id,
      intro: 'intro',
      store: projectStore,
      isKnownPlace: false,
      city: '',
      street: '',
      number: '',
    });
    setProject(newProject);
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // console.log(project);
    // const project = new Project({
    //   // id: v4(),
    //   id: 'formtest',
    //   userId: uiStore.currentUser.id,
    //   title,
    //   intro: 'intro',
    //   isKnownPlace,
    //   city,
    //   street,
    //   number,
    //   store: projectStore,
    // });

    const result = await projectStore.createProject(project);
  };

  return (
    <>
      <form className={styles.form} autoComplete="off" onSubmit={handleSubmitForm}>
        <h2 className={styles.title}>Laten we starten met de basis</h2>

        {/* TITEL */}
        <h3 className={styles.subtitle}>Geef je project een titel</h3>
        <TextField
          required
          className={styles.textfield}
          fullWidth
          id="outlined-basic"
          label="Titel"
          variant="outlined"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
            project.setParam({ param: 'title', value: title });
          }}
        />

        {/* PLAATS */}
        <h3 className={styles.subtitle}>Project plaats</h3>
        <p>
          Een project kan enkel doorgaan in Kortrijk en omstreken. Dit adres dient als startpunt voor je project, dit
          kan je later nog wijzigen.
        </p>
        <div className={styles.place}>
          <p>Weet je in welke stad je project doorgaat?</p>
          <div>
            <span className={styles.place__label}>Nee</span>
            <Switch
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'Ik ken mijn stad' }}
              checked={isKnownPlace}
              onChange={(e) => setIsKnownPlace(e.currentTarget.checked)}
            />
            <span className={styles.place__label}>Ja</span>
          </div>
        </div>

        {/* STEDEN */}
        {isKnownPlace && (
          <>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="stad">Stad</InputLabel>
              <Select
                defaultValue="Kortrijk"
                onChange={(e) => setCity(e.target.value)}
                labelId="stad"
                id="stad"
                label="Stad"
              >
                <MenuItem value="Kortrijk">Kortrijk</MenuItem>
                <MenuItem value="Izegem" selected>
                  Izegem
                </MenuItem>
              </Select>
            </FormControl>
            <Grid>
              <div className={styles.textfield__street}>
                <TextField
                  className={styles.textfield}
                  fullWidth
                  id="street"
                  label="Straat (optioneel)"
                  variant="outlined"
                  value={street}
                  onChange={(e) => setStreet(e.currentTarget.value)}
                />
              </div>
              <div className={styles.textfield__number}>
                <TextField
                  className={styles.textfield}
                  fullWidth
                  id="number"
                  label="Nr (optioneel)"
                  variant="outlined"
                  value={number}
                  onChange={(e) => setNumber(e.currentTarget.value)}
                />
              </div>
            </Grid>
          </>
        )}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FormOne;
