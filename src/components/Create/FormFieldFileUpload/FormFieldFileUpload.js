import { useState, useEffect } from 'react';
import { useField } from '@formiz/core';

import styles from './FormFieldFileUpload.module.scss';

const FormFieldFileUpload = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(props);
  const { required, defaultValue, option, userId } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  const [preview, setPreview] = useState(null);

  const handleLoadImage = (target) => {
    const targetFile = target.files[0];
    const imageURL = URL.createObjectURL(targetFile);
    setPreview(imageURL);
    setValue({ file: targetFile, path: imageURL, name: targetFile.name });
  };

  const handleClickRemoveImage = () => {
    setPreview('');
  };

  return (
    <>
      <input
        type="file"
        id="myFile"
        accept="image/png, image/jpeg, image/jpg"
        name="filename"
        onChange={(e) => handleLoadImage(e.currentTarget)}
      />
      {preview && (
        <>
          <div
            className={styles.style__customPreview}
            style={{
              background: `center / cover no-repeat url(${preview ? preview : ''})`,
              height: '20rem',
              width: '20rem',
            }}
          ></div>
          {/* <p className={styles.style__remove} onClick={handleClickRemoveImage}>
            Remove
          </p> */}
        </>
      )}
    </>
  );
};

export default FormFieldFileUpload;
