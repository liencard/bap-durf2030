import { observer } from 'mobx-react-lite';
import { FormFieldInput } from '../../Create';
import styles from './ProjectHelpThree.module.scss';

const ProjectHelpThree = observer(() => {
  return (
    <>
      <h2 className={styles.title}>Dank je wel!</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </p>
      ank
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
