import { observer } from 'mobx-react-lite';
import styles from './EditUpdates.module.scss';
import { EditPart, EditLabel, EditField } from '..';
import { FormFieldRichTextEditor } from '../../Create';
import { ParsedRichText } from '../../UI';
import { useStores } from '../../../hooks/useStores';

const EditUpdates = observer(({ project }) => {
  const { uiStore } = useStores();

  const handleSaveUpdate = (values) => {
    const update = {
      text: values.update,
      user: {
        id: uiStore.currentUser.id,
        avatar: uiStore.currentUser.avatar,
        name: uiStore.currentUser.name,
      },
    };
    project.createUpdate(update);
  };

  const handleDeleteUpdate = (update) => {
    project.removeUpdate(update);
  };

  return (
    <>
      <EditPart
        title="Update plaatsen"
        alwaysEnabled
        handleSaveProject={handleSaveUpdate}
      >
        <EditField>
          <EditLabel text="Nieuwe update" htmlFor="description" />
          <FormFieldRichTextEditor name="update" />
        </EditField>
      </EditPart>
      <article>
        <h2 className={styles.subtitle}>Alle updates</h2>
        <div className={styles.updates}>
          {project.updates.length > 0
            ? project.updates.map((update, i) => {
                return (
                  <section key={i} className={styles.update}>
                    <div className={styles.header}>
                      <div className={styles.info}>
                        <p className={styles.date}>
                          {project.getReadableDate(update.timestamp)}
                        </p>
                        <p className={styles.name}>
                          Geplaatst door {update.user.name}
                        </p>
                      </div>

                      <button
                        className={styles.delete}
                        onClick={() => handleDeleteUpdate(update)}
                      >
                        <img src="/icons/delete-red.svg" />
                        <span className="hidden">Verwijder</span>
                      </button>
                    </div>
                    <ParsedRichText html={update.text} />
                  </section>
                );
              })
            : 'Dit project heeft nog geen updates.'}
        </div>
      </article>
    </>
  );
});

export default EditUpdates;
