import { useState, useEffect } from 'react';
import styles from './ProjectHelpTwoService.module.scss';
import { useField } from '@formiz/core';

const ProjectHelpTwoService = (props) => {
  const { setValue, value } = useField(props);
  const { project, services } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    setValue(items);
  }, [items]);

  useEffect(() => {
    const itemsArr = services.map((service) => {
      return {
        id: service.id,
        name: service.name,
        amount: service.amount,
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
      <h2 className={styles.title}>Dienst aanbieden</h2>
      <p>{project.servicesDescription}</p>
      <div className={styles.services}>
        {items.map((item) => (
          <div key={item.id} className={`${styles.item} ${item.count === 0 && styles.itemLight}`}>
            <div className={styles.amount}>
              <div
                className={`${styles.sign}`}
                onClick={() => {
                  changeItemAmount(item, 'decrease');
                }}
              >
                -
              </div>
              <p className={styles.number}>{item.count}</p>
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
};

export default ProjectHelpTwoService;
