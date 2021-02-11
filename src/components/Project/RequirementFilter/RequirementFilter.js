import styles from './RequirementFilter.module.scss';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useEffect, useState } from 'react';
import { SERVICETYPES, MATERIALTYPES } from '../../../consts/index';

const RequirementFilter = ({
  catService,
  setCatService,
  catMaterial,
  setCatMaterial,
}) => {
  const [showTagOptions, setShowTagOptions] = useState(false);

  const handleChangeCatService = (event) => {
    setCatService(event.target.value);
  };

  const handleChangeCatMaterial = (event) => {
    setCatMaterial(event.target.value);
  };

  useEffect(() => {
    if (!showTagOptions) {
      setCatService('none');
      setCatMaterial('none');
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
                setCatService('none');
                setCatMaterial('none');
              }}
            >
              Verwijder tags
            </button>
            <div className={styles.select}>
              <FormControl fullWidth variant="outlined">
                <Select value={catService} onChange={handleChangeCatService}>
                  <MenuItem value="none">
                    <em className={styles.default}>Geen vrijlligers type</em>
                  </MenuItem>
                  {SERVICETYPES.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={styles.select}>
              <FormControl fullWidth variant="outlined">
                <Select value={catMaterial} onChange={handleChangeCatMaterial}>
                  <MenuItem value="none">
                    <em className={styles.default}>Geen materiaal</em>
                  </MenuItem>
                  {MATERIALTYPES.map((material) => (
                    <MenuItem key={material} value={material}>
                      {material}
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

export default RequirementFilter;
