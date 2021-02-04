import { observer } from 'mobx-react-lite';
import styles from './EditUpdates.module.scss';
import { EditPart, EditLabel } from '..';
import { FormFieldRichTextEditor } from '../../Create';
import { ParsedRichText } from '../../UI';

const EditUpdates = observer(({ project }) => {
  const handleSaveUpdate = ({ update }) => {
    project.createUpdate(update);
  };

  const handleDeleteUpdate = (update) => {
    project.removeUpdate(update);
  };
  return (
    <>
      <EditPart title="Update plaatsen" alwaysEnabled handleSaveProject={handleSaveUpdate}>
        <div className={styles.field__wrapper}>
          <EditLabel text="Nieuwe update" htmlFor="description" />
          <FormFieldRichTextEditor name="update" />
        </div>
      </EditPart>
      <article>
        <h2 className={styles.subtitle}>Alle updates</h2>
        <div className={styles.updates}>
          {project.updates.map((update, i) => {
            return (
              <section key={i} className={styles.update}>
                <div className={styles.header}>
                  <p className={styles.date}>{project.getReadableDate(update.timestamp)}</p>
                  <button className={styles.delete} onClick={() => handleDeleteUpdate(update)}>
                    <img src="/icons/delete-red.svg" />
                    <span className="hidden">Verwijder</span>
                  </button>
                </div>
                <ParsedRichText html={update.text} />
              </section>
            );
          })}
        </div>
      </article>
    </>
  );
});

export default EditUpdates;
