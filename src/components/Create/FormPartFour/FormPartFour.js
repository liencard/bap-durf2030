import { useState } from 'react';
import styles from './FormPartFour.module.scss';
import { FormFieldSwitch, FormFieldInput, FormFieldAddItem } from '../index';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';

const FormPartFour = () => {
  const [serviceRequirement, setServiceRequirement] = useState(false);
  const [materialsRequirement, setMaterialsRequirement] = useState(false);
  const [fundingRequirement, setFundingRequirement] = useState(false);

  // Rich text: https://dev.to/shaerins/setting-up-a-basic-rich-text-editor-in-react-3afg
  return (
    <>
      <h2 className={styles.title}>Ondersteuning</h2>
      <h3 className={styles.subtitle}>Naar welke soort ondersteuning ben je op zoek?</h3>
      <p>
        DURF2030 kan helpen met het zoeken naar de juiste partners voor je project, we kunnen communicatief ondersteunen
        en je helpen zoeken naar middelen om je project te realiseren.
      </p>
      <div className={styles.requirements}>
        <div
          className={`${styles.requirement} ${serviceRequirement && styles.requirementChecked}`}
          onClick={() => {
            setServiceRequirement(!serviceRequirement);
          }}
        >
          <span>Diensten</span>
          <FormFieldSwitch
            name="serviceRequirement"
            label="serviceRequirement"
            setToggleValue={setServiceRequirement}
            defaultValue={serviceRequirement}
          />
        </div>
        <div
          className={`${styles.requirement} ${materialsRequirement && styles.requirementChecked}`}
          onClick={() => {
            setMaterialsRequirement(!materialsRequirement);
          }}
        >
          <span>Materialen</span>
          <FormFieldSwitch
            name="materialsRequirement"
            label="materialsRequirement"
            setToggleValue={setMaterialsRequirement}
            defaultValue={materialsRequirement}
          />
        </div>
        <div
          className={`${styles.requirement} ${fundingRequirement && styles.requirementChecked}`}
          onClick={() => {
            setFundingRequirement(!fundingRequirement);
          }}
        >
          <span>Donaties</span>
          <FormFieldSwitch
            name="fundingRequirement"
            label="fundingRequirement"
            setToggleValue={setFundingRequirement}
            defaultValue={fundingRequirement}
          />
        </div>
      </div>

      {/* Geld */}
      {fundingRequirement && (
        <>
          <h2 className={styles.title}>Geld</h2>
          <h3 className={styles.subtitle}>Wat is het budget? </h3>
          {/* <Slider
        // value={value}
        // value={1}
        min={1}
        step={1}
        max={3000}
        // scale={(x) => x ** 10}
        // getAriaValueText={valueLabelFormat}
        // valueLabelFormat={valueLabelFormat}
        // onChange={handleChange}
        valueLabelDisplay="on"
        // aria-labelledby="discrete-slider-always"
        // ValueLabelComponent={ValueLabelComponent}
        marks={[
          { value: 1, label: '1 EUR' },
          { value: 3000, label: '3000 EUR' },
        ]}
      /> */}

          <FormControl variant="outlined" fullWidth>
            <FormFieldInput
              type="number"
              name="budget"
              label="Budget"
              InputProps={{
                inputProps: { min: 1, max: 3000 },
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
              }}
              required
            />
            <FormHelperText id="outlined-weight-helper-text">Max 3000 euro</FormHelperText>
          </FormControl>
          <h3 className={styles.subtitle}>Beschrijf waar het geld voor gebruikt zal worden</h3>
          <FormFieldInput multiline name="budgetDescription" label="Beschrijving" rows={8} required />
        </>
      )}

      {/* Materiaal */}
      {materialsRequirement && (
        <>
          <h2 className={styles.title}>Materiaal</h2>
          <h3 className={styles.subtitle}>Noteer welk soort materiaal je nodig hebt</h3>
          <FormFieldAddItem name="materials" options={['Bouwmateriaal', 'x', 'y', 'andere']} />
          <h3 className={styles.subtitle}>Waarvoor wordt het materiaal gebruikt?</h3>
          <FormFieldInput multiline name="materialsDescription" label="Beschrijving" rows={8} required />
        </>
      )}

      {/* Diensten */}
      {serviceRequirement && (
        <>
          <h2 className={styles.title}>Diensten</h2>
          <h3 className={styles.subtitle}>Noteer welk soort diensten je nodig hebt</h3>
          <FormFieldAddItem name="services" options={['Bouwmateriaal', 'x', 'y', 'andere']} />
          <h3 className={styles.subtitle}>Waarvoor heb je deze diensten nodig?</h3>
          <FormFieldInput multiline name="servicesDescription" label="Beschrijving" rows={8} required />
        </>
      )}
    </>
  );
};

export default FormPartFour;
