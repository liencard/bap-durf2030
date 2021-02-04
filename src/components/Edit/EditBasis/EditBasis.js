import { useState } from 'react';
import styles from './EditBasis.module.scss';
import { EditPart, EditLabel, EditField } from '../';
import {
  FormFieldRichTextEditor,
  FormFieldInput,
  FormFieldCheckbox,
  FormFieldSwitch,
  FormFieldSelect,
} from '../../Create';
import { THEMES, CATEGORIES } from '../../../consts';

const EditBasis = ({ project }) => {
  const [isKnownPlace, setIsKnownPlace] = useState(project.isKnownPlace);

  const handleSaveProject = (values) => {
    if (values.categories && values.themes) {
      let categoriesWithValues = {};
      let themesWithValues = {};
      CATEGORIES.forEach((category, i) => {
        const key = category.toLowerCase();
        categoriesWithValues[key] = values.categories[i];
      });
      THEMES.forEach((theme, i) => {
        const key = theme.toLowerCase();
        themesWithValues[key] = values.themes[i];
      });
      values['categories'] = categoriesWithValues;
      values['themes'] = themesWithValues;
    }
    project.updateProject(values);
  };

  return (
    <>
      <section className={styles.status}>
        <h2 className={styles.title}>Status</h2>
        <p>Lorum ipsum</p>
      </section>

      <EditPart title="Algemene Info" handleSaveProject={handleSaveProject}>
        <EditField>
          <EditLabel text="Title" htmlFor="title" />
          <FormFieldInput defaultValue={project.title} name="title" required />
        </EditField>
        <EditField>
          <EditLabel text="Korte samenvatting" htmlFor="intro" />
          <FormFieldInput defaultValue={project.intro} name="intro" multiline required />
        </EditField>
        <EditField>
          <EditLabel text="Beschrijving" htmlFor="description" />
          <FormFieldRichTextEditor defaultValue={project.description} name="description" />
        </EditField>
      </EditPart>

      <EditPart title="Foto's" handleSaveProject={handleSaveProject}>
        <p>fotos</p>
      </EditPart>

      <EditPart title="Tags" handleSaveProject={handleSaveProject}>
        <EditField>
          <EditLabel text="Thema's" htmlFor="themes[]" />
          <fieldset className={styles.themes}>
            {THEMES.map((theme, i) => {
              return (
                <FormFieldCheckbox
                  key={theme}
                  name={`themes[${i}]`}
                  option={theme}
                  defaultValue={theme ? project.themes[theme.toLowerCase()] : false}
                />
              );
            })}
          </fieldset>
        </EditField>
        <EditField>
          <EditLabel text="Categorieën" htmlFor="categories[]" />
          <fieldset className={styles.categories}>
            {CATEGORIES.map((category, i) => {
              return (
                <FormFieldCheckbox
                  key={category}
                  name={`categories[${i}]`}
                  option={category}
                  defaultValue={category ? project.categories[category.toLowerCase()] : false}
                />
              );
            })}
          </fieldset>
        </EditField>
      </EditPart>

      <EditPart title="Locatie" handleSaveProject={handleSaveProject}>
        <EditField row>
          <EditLabel text="Weet je in welke stad je project doorgaat?" htmlFor="isKnownPlace" />
          <div className={styles.form__switch}>
            <span className={styles.place__label}>Nee</span>
            <FormFieldSwitch
              name="isKnownPlace"
              label="isKnownPlace"
              setToggleValue={setIsKnownPlace}
              defaultValue={project.isKnownPlace}
            />
            <span className={styles.place__label}>Ja</span>
          </div>
        </EditField>

        {isKnownPlace && (
          <>
            <div className={styles.location}>
              <EditField>
                <EditLabel text="Stad" htmlFor="city" />
                <FormFieldSelect name="city" options={['Kortrijk', 'Izegem']} defaultValue="Kortrijk" />
              </EditField>
              <EditField>
                <EditLabel text="Straat" htmlFor="street" />
                <FormFieldInput defaultValue={project.street} name="street" />
              </EditField>
              <EditField>
                <EditLabel text="Nr" htmlFor="number" />
                <FormFieldInput defaultValue={project.number} name="number" />
              </EditField>
            </div>
          </>
        )}
      </EditPart>
    </>
  );
};

export default EditBasis;
