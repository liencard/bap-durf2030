import styles from './FormPartFive.module.scss';
import { FormFieldAddUser, FormFieldWrapper } from '../index';

const FormPartFive = () => {
  return (
    <>
      <FormFieldWrapper>
        <h2 className={styles.title}>Samenwerken</h2>
        <p className={styles.info}>
          Deel mee met wie je gaat samenwerken. Dit is een opsomming van individuen, organisaties, bedrijven, waarmee
          jij dit project wilt uitvoeren. Heb je die nog niet? Geen probleem dan zoeken we samen naar de juiste partners
          voor jouw project.
        </p>
      </FormFieldWrapper>
      <FormFieldWrapper>
        <h3 className={styles.subtitle}>Durver toevoegen (optioneel)</h3>
        <p className={styles.info}>
          Zoek naar bestaande DURF 2030 accounts, dit kunnen leden of teams zijn. Of voeg manueel iemand toe zonder
          account.
        </p>
        <FormFieldAddUser showCurrentUser name="owners" />
      </FormFieldWrapper>
    </>
  );
};

export default FormPartFive;
