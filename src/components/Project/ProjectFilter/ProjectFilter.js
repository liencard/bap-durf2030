import styles from './ProjectFilter.module.scss';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useEffect, useState } from 'react';
import { THEMES, CATEGORIES, CITIES } from '../../../consts/index';

// Zie https://codesandbox.io/s/cwvg4?file=/demo.js:1577-1656

const ProjectFilter = ({
  location,
  setLocation,
  theme,
  setTheme,
  cat,
  setCat,
}) => {
  const [showTagOptions, setShowTagOptions] = useState(false);

  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };

  const handleChangeCat = (event) => {
    setCat(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  useEffect(() => {
    if (!showTagOptions) {
      setTheme('none');
      setCat('none');
      setLocation('none');
    }
  }, [showTagOptions]);

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
          <div className={styles.select}>
            <FormControl variant="outlined">
              <Select defaultValue="Nieuwste">
                <MenuItem value="Nieuwste">Nieuwste</MenuItem>
                <MenuItem value="Populairste">Populairste</MenuItem>
              </Select>
            </FormControl>
          </div>

          <button
            onClick={() => setShowTagOptions(!showTagOptions)}
            className={styles.button}
          >
            Filter
          </button>
        </div>
      </div>
      {showTagOptions && (
        <>
          <div className={styles.tags}>
            <button
              className={styles.delete}
              onClick={() => {
                setCat('none');
                setTheme('none');
                setLocation('none');
              }}
            >
              Verwijder tags
            </button>
            <div className={styles.select}>
              <FormControl fullWidth variant="outlined">
                <Select value={theme} onChange={handleChangeTheme}>
                  <MenuItem value="none">
                    <em className={styles.default}>Geen thema</em>
                  </MenuItem>
                  {THEMES.map((theme) => (
                    <MenuItem key={theme} value={theme}>
                      {theme}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={styles.select}>
              <FormControl fullWidth variant="outlined">
                <Select value={cat} onChange={handleChangeCat}>
                  <MenuItem value="none">
                    <em className={styles.default}>Geen categorie</em>
                  </MenuItem>
                  {CATEGORIES.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={styles.select}>
              <FormControl fullWidth variant="outlined">
                <Select value={location} onChange={handleChangeLocation}>
                  <MenuItem value="none">
                    <em className={styles.default}>Geen locatie</em>
                  </MenuItem>
                  {CITIES.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectFilter;
