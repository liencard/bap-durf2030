import styles from './ProjectFilter.module.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { THEMES, CATEGORIES, CITIES } from '../../../consts/index';

// Zie https://codesandbox.io/s/cwvg4?file=/demo.js:1577-1656

const ProjectFilter = ({ tags, setTags, theme, setTheme, cat, setCat }) => {
  //const [tags, setTags] = useState([]);
  const [showTagOptions, setShowTagOptions] = useState(false);

  const handleChange = (event) => {
    setTags(event.target.value);
  };

  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };

  const handleChangeCat = (event) => {
    setCat(event.target.value);
  };

  console.log(cat);

  //console.log(tags);

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.search}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Zoeken"
            variant="outlined"
          />
        </div>
        <div>
          <p className={styles.label}>Kaartweergave</p>
          <p className={styles.label}>Sorteren op</p>

          <FormControl variant="outlined">
            <Select defaultValue="Nieuwste">
              <MenuItem value="Nieuwste">Nieuwste</MenuItem>
              <MenuItem value="Populairste">Populairste</MenuItem>
            </Select>
          </FormControl>

          <button
            onClick={() => setShowTagOptions(!showTagOptions)}
            className={styles.button}
          >
            Filter
          </button>

          {/* <FormControl variant="outlined" fullWidth>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={tags}
            onChange={handleChange}
            renderValue={(selected) => `Filter ${selected.length}`}
            variant="outlined"
          >
            <p>Thema's</p>
            {THEMES.map((theme) => (
              <MenuItem className={styles.test} key={theme} value={theme}>
                <Checkbox checked={tags.indexOf(theme) > -1} />
                <ListItemText primary={theme} />
              </MenuItem>
            ))}

            <p>Categorieën</p>
            {CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                <Checkbox checked={tags.indexOf(category) > -1} />
                <ListItemText primary={category} />
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        </div>
      </div>
      {showTagOptions && (
        <div className={styles.tags}>
          <FormControl fullWidth variant="outlined">
            <Select onChange={handleChangeTheme} defaultValue="klimaat">
              <MenuItem value="-- Geen thema --">-- Geen thema --</MenuItem>
              {THEMES.map((theme) => (
                <MenuItem key={theme} value={theme}>
                  {theme}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <Select onChange={handleChangeCat} defaultValue="kinderen">
              <MenuItem value="-- Geen categorie --">
                -- Geen categorie --
              </MenuItem>
              {CATEGORIES.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <FormControl fullWidth variant="outlined">
            <Select defaultValue="Nieuwste">
              {CITIES.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </div>
      )}
    </>
  );
};

export default ProjectFilter;
