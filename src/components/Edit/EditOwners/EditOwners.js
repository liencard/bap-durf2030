import styles from './EditOwners.module.scss';
import { EditPart, EditLabel, EditItemIcons } from '..';
import { FormFieldAddUser } from '../../Create';

const EditOwners = ({ project }) => {
  const handleSaveOwners = () => {};
  return (
    <EditPart title="Organisatoren" handleSaveProject={handleSaveOwners}>
      <div className={styles.field__wrapper}>
        <EditLabel text="Leg het doel uit" htmlFor="materialsDescription" />
        <FormFieldAddUser name="owners" />
      </div>
    </EditPart>
  );
};

export default EditOwners;
