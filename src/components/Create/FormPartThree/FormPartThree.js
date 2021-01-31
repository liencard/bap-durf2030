import styles from './FormPartThree.module.scss';
import { FormFieldInput, FormFieldRichTextEditor } from '../index';
import { useState } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const FormPartThree = () => {
  const [temp, setTemp] = useState();

  return (
    <>
      <h2 className={styles.title}>Beschrijving</h2>
      <p>In welke categorie(ën) bevindt jouw project? Meerdere selecties zijn mogelijk.</p>
      <h3 className={styles.subtitle}>Beschrijf jouw project aan het publiek</h3>
      <p>Noteer wat je project inhoudt. Deel mee welke positieve impact je teweeg wilt brengen.</p>
      <FormFieldRichTextEditor name="description" setTemp={setTemp} />

      <h3 className={styles.subtitle}>Vat je project kort samen</h3>
      <p>Beschrijf je project kort samen, dit wordt gezien op de overzichtspagina.</p>
      <FormFieldInput name="intro" label="Samenvatting" required />

      <br />
      <hr />
      <br />
      <div className={styles.richtext}>{ReactHtmlParser(temp)}</div>
    </>
  );
};

export default FormPartThree;
