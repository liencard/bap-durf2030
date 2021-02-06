import { useState, useEffect } from 'react';
import { useField } from '@formiz/core';
import { Button } from '../../UI';
import Compress from 'react-image-file-resizer';

import styles from './FormFieldFileUpload.module.scss';

const FormFieldFileUpload = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { required, defaultValue, option, userId } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  const [preview, setPreview] = useState(null);

  const handleLoadImage = (target) => {
    const targetFile = target.files[0];
    Compress.imageFileResizer(
      targetFile,
      1000,
      750,
      'JPEG',
      70,
      0,
      (uri) => {
        setPreview(uri);
        setValue({ file: targetFile, path: uri, name: targetFile.name });
      },
      'blob'
    );
  };

  const handleClickRemoveImage = () => {
    setPreview('');
    setValue(null);
  };

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue);
    }
  }, []);

  return (
    <>
      <div className={styles.upload}>
        <div className={styles.buttons}>
          <label for="fotoUpload" class={styles.button}>
            Foto uploaden
          </label>
          <input
            type="file"
            id="fotoUpload"
            accept="image/png, image/jpeg, image/jpg"
            name="filename"
            onChange={(e) => handleLoadImage(e.currentTarget)}
          />
          {preview && <Button text="Foto verwijderen" onClick={handleClickRemoveImage} variant="secondary" />}
        </div>
        {preview && (
          <>
            <div
              className={styles.image}
              style={{
                background: `center / cover no-repeat url(${preview ? preview : ''})`,
              }}
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default FormFieldFileUpload;
