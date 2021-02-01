import styles from './FormPartTwo.module.scss';
import { FormFieldCheckbox } from '../index';
import { THEMES, CATEGORIES } from '../../../consts';

const FormPartTwo = () => {
  return (
    <>
      <h2 className={styles.title}>Kies jouw Categorieën</h2>
      <p>In welke categorie(ën) bevindt jouw project? Meerdere selecties zijn mogelijk.</p>

      {/* Titel */}
      <h3 className={styles.subtitle}>Maatschappelijke thema</h3>
      <fieldset className={styles.themes}>
        {THEMES.map((theme, i) => {
          return <FormFieldCheckbox key={theme} name={`themes[${i}]`} option={theme} defaultValue={false} />;
        })}
      </fieldset>

      <h3 className={styles.subtitle}>Subcategorie</h3>
      <fieldset className={styles.categories}>
        {CATEGORIES.map((category, i) => {
          return <FormFieldCheckbox key={category} name={`categories[${i}]`} option={category} defaultValue={false} />;
        })}
      </fieldset>
    </>
  );
};

export default FormPartTwo;
