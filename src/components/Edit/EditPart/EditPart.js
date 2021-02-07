import styles from './EditPart.module.scss';
import { Button } from '../../UI';
import { useState, useEffect } from 'react';
import { Formiz, useForm } from '@formiz/core';

const EditPart = ({ children, title, handleSaveProject, alwaysEnabled }) => {
  const projectForm = useForm();
  const [allowEdit, setAllowEdit] = useState(false);

  useEffect(() => {
    if (alwaysEnabled) {
      setAllowEdit(true);
    }
  }, []);

  return (
    <Formiz connect={projectForm} onValidSubmit={handleSaveProject}>
      <form noValidate onSubmit={projectForm.submit}>
        <section className={styles.section}>
          <div className={styles.header}>
            <h2 className={styles.subtitle}>{title}</h2>
            {alwaysEnabled ? (
              <div>
                <Button
                  type="submit"
                  className={styles.save__btn}
                  text="Post opslaan"
                />
              </div>
            ) : (
              <div className={styles.buttons}>
                <Button
                  className={styles.edit__btn}
                  onClick={(e) => {
                    e.preventDefault();
                    setAllowEdit(!allowEdit);
                  }}
                  variant="secondary"
                  text={allowEdit ? 'Annuleer' : 'Bewerken'}
                />
                {allowEdit && (
                  <Button
                    type="submit"
                    className={styles.save__btn}
                    text="Bewerking opslaan"
                  />
                )}
              </div>
            )}
          </div>
          <div
            className={`${styles.form__wrapper} ${
              !allowEdit && styles.form__locked
            }`}
          >
            <div className={styles.form}>{children}</div>
          </div>
        </section>
      </form>
    </Formiz>
  );
};

export default EditPart;
