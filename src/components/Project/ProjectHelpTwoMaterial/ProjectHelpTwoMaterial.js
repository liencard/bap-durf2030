import { observer } from 'mobx-react-lite';
import { useState, useRef } from 'react';
import { useStores } from '../../../hooks/useStores';
import styles from './ProjectHelpTwoMaterial.module.scss';
import { useField } from '@formiz/core';

const ProjectHelpTwoMaterial = observer(({ info, materials }) => {
  //   const {
  //     errorMessage,
  //     id,
  //     isValid,
  //     isSubmitted,
  //     setValue,
  //     value,
  //   } = useField();

  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);

  const changeItemAmount = (item, type) => {
    let counter = amount;
    materials = materials.filter((currentItem) => {
      //console.log(currentItem);
      ////console.log(item);
      if (currentItem == item) {
        if (type == 'increase') {
          counter++;
        } else if (type == 'decrease') {
          counter--;
        }
      }
    });
    setAmount(counter);
  };

  return (
    <>
      <h2 className={styles.title}>Materiaal aanbieden</h2>
      <p>{info.materialsDetails.description}</p>
      <div className={styles.materials}>
        {materials.map((item) => (
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

export default ProjectHelpTwoMaterial;
