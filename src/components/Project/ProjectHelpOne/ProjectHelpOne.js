import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import styles from './ProjectHelpOne.module.scss';
import { FormFieldSwitch } from '../../Create';

const ProjectHelpOne = observer(() => {
  const [servicesRequired, setServicesRequired] = useState(false);
  const [materialsRequired, setMaterialsRequired] = useState(false);
  const [fundingRequired, setFundingRequired] = useState(false);
  const [invisibleToggle, setInvisibleToggle] = useState(false);

  useEffect(() => {
    if (servicesRequired || materialsRequired || fundingRequired) {
      setInvisibleToggle(true);
    }

    if (!servicesRequired && !materialsRequired && !fundingRequired) {
      setInvisibleToggle(false);
    }
  }, [
    setInvisibleToggle,
    invisibleToggle,
    servicesRequired,
    materialsRequired,
    fundingRequired,
  ]);

  return (
    <>
      <h2 className={styles.title}>Ik help mee!</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </p>
      <div className={styles.hidden}>
        <FormFieldSwitch
          name="invisibleToggle"
          label="invisibleToggle"
          setToggleValue={setInvisibleToggle}
          defaultValue={invisibleToggle}
          required
        />
      </div>
      <div className={styles.requirements}>
        <div
          className={`${styles.requirement} ${
            servicesRequired && styles.requirementChecked
          }`}
          onClick={() => {
            setServicesRequired(!servicesRequired);
          }}
        >
          <div className={`${styles.circle} ${styles.service}`} />
          <span className={styles.subtitle}>Diensten aanbieden</span>
          <FormFieldSwitch
            name="servicesRequired"
            label="servicesRequired"
            setToggleValue={setServicesRequired}
            defaultValue={servicesRequired}
          />
        </div>
        <div
          className={`${styles.requirement} ${
            materialsRequired && styles.requirementChecked
          }`}
          onClick={() => {
            setMaterialsRequired(!materialsRequired);
          }}
        >
          <div className={`${styles.circle} ${styles.material}`} />
          <span className={styles.subtitle}>Materialen aanbieden</span>
          <FormFieldSwitch
            name="materialsRequired"
            label="materialsRequired"
            setToggleValue={setMaterialsRequired}
            defaultValue={materialsRequired}
          />
        </div>
        <div
          className={`${styles.requirement} ${
            fundingRequired && styles.requirementChecked
          }`}
          onClick={() => {
            setFundingRequired(!fundingRequired);
          }}
        >
          <div className={`${styles.circle} ${styles.money}`} />
          <span className={styles.subtitle}>Donaties maken</span>
          <FormFieldSwitch
            name="fundingRequired"
            label="fundingRequired"
            setToggleValue={setFundingRequired}
            defaultValue={fundingRequired}
          />
        </div>
      </div>
    </>
  );
});

export default ProjectHelpOne;
