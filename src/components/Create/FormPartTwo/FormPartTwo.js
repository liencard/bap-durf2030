import { FormFieldCheckbox, FormFieldWrapper } from '../index';
import { THEMES, CATEGORIES } from '../../../consts';
import styles from './FormPartTwo.module.scss';

const FormPartTwo = () => {
  return (
    <>
      <FormFieldWrapper>
        <h2 className={styles.title}>Kies jouw Categorieën</h2>
        <p>In welke categorie(ën) bevindt jouw project? Meerdere selecties zijn mogelijk.</p>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <h3 className={styles.subtitle}>Maatschappelijke thema</h3>
        <fieldset className={styles.themes}>
          {THEMES.map((theme, i) => {
            return <FormFieldCheckbox key={theme} name={`themes[${i}]`} option={theme} defaultValue={false} />;
          })}
        </fieldset>
      </FormFieldWrapper>

      <FormFieldWrapper>
        <h3 className={styles.subtitle}>Subcategorie</h3>
        <fieldset className={styles.categories}>
          {CATEGORIES.map((category, i) => {
            return (
              <FormFieldCheckbox key={category} name={`categories[${i}]`} option={category} defaultValue={false} />
            );
          })}
        </fieldset>
      </FormFieldWrapper>
    </>
  );
};

export default FormPartTwo;
