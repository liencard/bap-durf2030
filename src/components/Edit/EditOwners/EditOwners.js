import { observer } from 'mobx-react-lite';
import styles from './EditOwners.module.scss';
import { EditPart, EditLabel } from '..';
import { FormFieldAddUser, FormFieldInput } from '../../Create';

const EditOwners = observer(({ project }) => {
  const showOwners = () => {
    return project.owners.map((owner) => {
      return {
        avatar: owner.avatar,
        id: owner.id,
        name: owner.name,
      };
    });
  };

  const handleSaveOwners = (values) => {
    values.owners.forEach((updatedOwner) => {
      const existingOwner = project.owners.find((existingOwner) => updatedOwner.id === existingOwner.id);
      if (!existingOwner) {
        // CREATE
        project.createProjectOwner(updatedOwner);
      }
    });
    project.owners.forEach((existingOwner) => {
      const owner = values.owners.find((updatedOwner) => updatedOwner.id === existingOwner.id);
      if (!owner) {
        // DELETE
        project.removeProjectOwner(existingOwner.id);
      }
    });
  };

  const handleSaveContact = ({ email }) => {
    if (email !== project.contact) {
      project.updateProjectContact(email);
    }
  };

  return (
    <>
      <EditPart title="Organisatoren" handleSaveProject={handleSaveOwners}>
        <div className={styles.field__wrapper}>
          <EditLabel text="Leg het doel uit" htmlFor="owners" />
          <FormFieldAddUser defaultValue={showOwners()} name="owners" />
        </div>
      </EditPart>
      <EditPart title="Contact" handleSaveProject={handleSaveContact}>
        <div className={styles.field__wrapper}>
          <EditLabel text="E-mail adres" htmlFor="email" />
          <FormFieldInput defaultValue={project.contact} name="email" required />
        </div>
      </EditPart>
    </>
  );
});

export default EditOwners;
