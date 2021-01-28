import { useState, useEffect } from 'react';
import { useField } from '@formiz/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from './FormFieldAddItem.module.scss';

const FormFieldAddItem = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { label, required, options, defaultValue } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  const [activeItem, setActiveItem] = useState('');
  const [activeItemCategory, setActiveItemCategory] = useState(options[0]);
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { name: activeItem, amount: 1, category: activeItemCategory }]);
    setActiveItem('');
    setValue(items);
  };

  const removeItem = (item) => {
    let newItems = items.slice();
    newItems = newItems.filter((currentItem) => {
      return currentItem !== item;
    });
    setItems(newItems);
    setValue(items);
  };

  const changeItemAmount = (item, type) => {
    let newItems = items.slice();
    newItems = newItems.filter((currentItem) => {
      if (currentItem == item) {
        if (type == 'increase') {
          item.amount++;
        } else if (type == 'decrease') {
          item.amount--;
        }
      }
      if (item.amount !== 0) {
        return currentItem;
      }
    });

    setItems(newItems);
    setValue(items);
  };

  return (
    <>
      {items.map((item, i) => {
        return (
          <div key={i} className={styles.item}>
            <div className={styles.amount}>
              <div
                className={`${styles.sign}`}
                onClick={() => {
                  changeItemAmount(item, 'decrease');
                }}
              >
                -
              </div>
              <p className={styles.number}>{item.amount}</p>
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
              <p className={styles.category}>{item.category}</p>
              <p className={styles.name}>{item.name}</p>
            </div>
            <p
              onClick={() => {
                removeItem(item);
              }}
              className={styles.delete}
            >
              verwijder
            </p>
          </div>
        );
      })}

      <div className={styles.wrapper}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Categorie</InputLabel>
          <Select onChange={(e) => setActiveItemCategory(e.target.value)} defaultValue={options[0]}>
            {options.map((option) => {
              return (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <TextField
            onKeyPress={(e) => {
              if (e.key === 'Enter' && activeItem) {
                e.preventDefault();
                addItem();
              }
            }}
            fullWidth
            type="text"
            label="Materiaal"
            variant="outlined"
            value={activeItem ?? ''}
            onChange={(e) => setActiveItem(e.target.value)}
          />
          <FormHelperText id="outlined-weight-helper-text">Druk op ENTER om toe te voegen</FormHelperText>

          <div className={styles.add__button}>
            <div
              onClick={() => {
                if (activeItem) {
                  addItem();
                }
              }}
              className={styles.click}
            />
            <div className={styles.plus}>
              <span>+</span>
            </div>
          </div>
        </FormControl>
      </div>
    </>
  );
};

export default FormFieldAddItem;
