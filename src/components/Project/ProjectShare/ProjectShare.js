import styles from './ProjectShare.module.scss';
import { Modal } from '../../UI';
import { Grid } from '../../Layout';
import { useState, useRef } from 'react';

const ProjectShare = ({}) => {
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('Kopieer');
  const textAreaRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCopyStatus('Kopieer');
  };

  const handleClickCopy = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopyStatus('Gekopieerd!');
  };

  return (
    <>
      <Modal open={open} handleClose={handleClose}>
        <Grid>
          <div className={styles.img}>
            <div />
          </div>
          <div className={styles.text}>
            <h2 className={styles.title} id="transition-modal-title">
              Deel dit project
            </h2>
            <p id="transition-modal-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <ul className={styles.options}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>E-mail</li>
              <li>Print Flyer</li>
            </ul>
            <div className={styles.copy}>
              <p>Kopieer link</p>
              <div>
                <form>
                  <input
                    type="text"
                    ref={textAreaRef}
                    value={`${window.location.href}`}
                  />
                </form>
                <button onClick={handleClickCopy}>{copyStatus}</button>
              </div>
            </div>
          </div>
        </Grid>
      </Modal>
      <div className={styles.share} onClick={handleOpen}>
        <img src="/icons/share-green.svg" alt="deel project" />
        <p>Delen</p>
      </div>
    </>
  );
};

export default ProjectShare;
