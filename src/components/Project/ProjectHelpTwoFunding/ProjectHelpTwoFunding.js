import { observer } from 'mobx-react-lite';

import styles from './ProjectHelpTwoFunding.module.scss';

const ProjectHelpTwoFunding = observer(({ project }) => {
  return (
    <>
      <h2 className={styles.title}>Geld geven</h2>
      <p>{project.fundingDescription}</p>
      <div className={styles.funding}>
        <p>Work in progress</p>
      </div>
    </>
  );
});

export default ProjectHelpTwoFunding;
