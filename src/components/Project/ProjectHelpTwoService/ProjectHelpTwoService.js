import { observer } from 'mobx-react-lite';
import { useState, useRef } from 'react';
import styles from './ProjectHelpTwoService.module.scss';

const ProjectHelpTwoService = observer(({ info, services }) => {
  const [amount, setAmount] = useState(1);
  return (
    <>
      <h2 className={styles.title}>Dienst aanbieden</h2>
      <p>{info.servicesDetails.description}</p>
      <div className={styles.services}>
        {services.map((item) => (
          <div
            key={item.id}
            className={`${styles.item} ${amount === 0 && styles.itemLight}`}
          >
            <div className={styles.amount}>
              <div
                className={`${styles.sign}`}
                onClick={() => {
                  changeItemAmount(item, 'decrease');
                }}
              >
                -
              </div>
              <p className={styles.number}>{amount}</p>
              <div
                className={`${styles.sign}`}
                onClick={() => {
                  changeItemAmount(item, 'increase');
                }}
              >
                +
              </div>
            </div>
            <div className={styles.text}>
              <p className={styles.name}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

export default ProjectHelpTwoService;
