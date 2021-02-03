import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import styles from './ProjectHelpTwoMaterial.module.scss';
import { useField } from '@formiz/core';

const ProjectHelpTwoMaterial = (props) => {
  const { setValue, value } = useField(props);
  const { project, materials } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    setValue(items);
  }, [items]);

  useEffect(() => {
    const itemsArr = materials.map((material) => {
      return {
        id: material.id,
        name: material.name,
        amount: material.amount,
        count: 0,
      };
    });
    setItems(itemsArr);
  }, []);

  const changeItemAmount = (item, type) => {
    const itemsArr = items.filter((currentItem) => {
      if (currentItem == item) {
        if (type == 'increase' && currentItem.amount !== currentItem.count) {
          item.count++;
        } else if (type == 'decrease' && currentItem.count !== 0) {
          item.count--;
        }
      }
      return currentItem;
    });
    setItems(itemsArr);
  };

  return (
    <>
      <h2 className={styles.title}>Materiaal aanbieden</h2>
      <p>{project.materialsDescription}</p>
      <div className={styles.materials}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.item} ${item.count === 0 && styles.itemLight}`}
          >
            <div className={styles.amount}>
              <div
                className={`${styles.sign} ${styles.sign__min}`}
                onClick={(e) => {
                  e.preventDefault();
                  changeItemAmount(item, 'decrease');
                }}
              >
                -
              </div>
              <p className={styles.number}>{item.count}</p>
              <div
                className={`${styles.sign} ${styles.sign__add}`}
                onClick={() => {
                  changeItemAmount(item, 'increase');
                }}
              >
                +
              </div>
            </div>
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectHelpTwoMaterial;
