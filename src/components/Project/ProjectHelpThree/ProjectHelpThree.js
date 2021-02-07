import { observer } from 'mobx-react-lite';
import { FormFieldInput } from '../../Create';
import styles from './ProjectHelpThree.module.scss';

const ProjectHelpThree = observer(() => {
  return (
    <>
      <h2 className={styles.title}>Dank je wel!</h2>
      <p>
        Indien je materiaal of een dienst hebt aangeboden zal een organisator
        van het project verder contact opnemen met u.
      </p>

      <div className={styles.contact}>
        <h3 className={styles.subtitle}>Laat een bericht achter</h3>
        <FormFieldInput
          multiline
          name="message"
          label="Schrijf een bericht"
          rows={6}
        />
      </div>
    </>
  );
});

export default ProjectHelpThree;
