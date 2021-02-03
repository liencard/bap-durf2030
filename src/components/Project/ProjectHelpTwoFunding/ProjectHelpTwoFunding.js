import { observer } from 'mobx-react-lite';

import styles from './ProjectHelpTwoFunding.module.scss';

const ProjectHelpTwoFunding = observer(({ info }) => {
  return (
    <>
      <h2 className={styles.title}>Geld geven</h2>
      <p>{info.fundingDetails.description}</p>
      <div className={styles.funding}>
        <p>Work in progress</p>
      </div>
    </>
  );
});

export default ProjectHelpTwoFunding;
