import { useState } from 'react';
import styles from './FormPartTwo.module.scss';
import { FormFieldInput, FormFieldSelect, FormFieldSwitch, FormFieldCheckbox } from '../index';
import { Grid } from '../../Layout';

import FormControl from '@material-ui/core/FormControl';

const FormPartTwo = () => {
  const [isKnownPlace, setIsKnownPlace] = useState(false);

  // Uit database halen
  const themes = ['Eeenzaamheid rond corona', 'Ondernemingschap', 'Klimaat', 'Andere'];
  const categories = [
    'Muziek',
    'Sociaal',
    'Kinderen',
    'Kunst',
    'Theater',
    'Technologie',
    'Dans',
    'Audiovisueel',
    'Natuur',
    'Divers',
  ];

  return (
    <>
      <h2 className={styles.title}>Kies jouw Categorieën</h2>
      <p>In welke categorie(ën) bevindt jouw project? Meerdere selecties zijn mogelijk.</p>

      {/* Titel */}
      <h3 className={styles.subtitle}>Maatschappelijke thema</h3>
      <fieldset className={styles.themes}>
        {themes.map((theme, i) => {
          return <FormFieldCheckbox key={theme} name={`themes[${i}]`} option={theme} defaultValue={false} />;
        })}
      </fieldset>

      <h3 className={styles.subtitle}>Subcategorie</h3>
      <fieldset className={styles.categories}>
        {categories.map((category, i) => {
          return <FormFieldCheckbox key={category} name={`categories[${i}]`} option={category} defaultValue={false} />;
        })}
      </fieldset>
    </>
  );
};

export default FormPartTwo;
