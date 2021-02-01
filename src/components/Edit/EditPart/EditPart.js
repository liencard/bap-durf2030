import styles from './EditPart.module.scss';
import { Button } from '../../UI';
import { useState } from 'react';
import { Formiz, useForm } from '@formiz/core';

const EditPart = ({ children, title, handleSaveProject }) => {
  const projectForm = useForm();
  const [allowEdit, setAllowEdit] = useState(false);

  return (
    <Formiz connect={projectForm} onValidSubmit={handleSaveProject}>
      <form noValidate onSubmit={projectForm.submit}>
        <section className={styles.section}>
          <div className={styles.header}>
            <h2 className={styles.subtitle}>{title}</h2>
            <div>
              <button className={styles.edit__btn} onClick={() => setAllowEdit(!allowEdit)}>
                {allowEdit ? 'Annuleer' : 'Bewerken'}
              </button>
              {allowEdit && <Button type="submit" className={styles.save__btn} text={'Bewerking opslaan'} />}
            </div>
          </div>
          <div className={styles.form__wrapper}>
            <div className={styles.form}>{children}</div>
            {!allowEdit && <div className={styles.form__locked}></div>}
          </div>
        </section>
      </form>
    </Formiz>
  );
};

export default EditPart;
