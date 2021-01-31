import styles from './FormPartThree.module.scss';
import { FormFieldInput } from '../index';

const FormPartThree = () => {
  // Rich text: https://dev.to/shaerins/setting-up-a-basic-rich-text-editor-in-react-3afg
  return (
    <>
      <h2 className={styles.title}>Beschrijving</h2>
      <p>In welke categorie(ën) bevindt jouw project? Meerdere selecties zijn mogelijk.</p>
      <h3 className={styles.subtitle}>Beschrijf jouw project aan het publiek</h3>
      <p>Noteer wat je project inhoudt. Deel mee welke positieve impact je teweeg wilt brengen.</p>
      <FormFieldInput multiline name="description" label="Beschrijving" rows={8} required />

      <h3 className={styles.subtitle}>Vat je project kort samen</h3>
      <p>Beschrijf je project kort samen, dit wordt gezien op de overzichtspagina.</p>
      <FormFieldInput name="intro" label="Samenvatting" required />
    </>
  );
};

export default FormPartThree;
