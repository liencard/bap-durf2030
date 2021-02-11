import styles from './ProjectShare.module.scss';
import { Modal } from '../../UI';
import { Grid } from '../../Layout';
import { useState, useRef } from 'react';
import { useRouter, asPath } from 'next/router';

const ProjectShare = () => {
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState('Kopieer');
  const textAreaRef = useRef(null);
  const router = useRouter();

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
              Je kan dit project verder helpen door het project te delen en meer
              hulp te sprokkelen.
            </p>
            <ul className={styles.options}>
              <a
                aria-label="Deel op Facebook"
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener"
              >
                <li>
                  <img
                    className={styles.icon}
                    src="/icons/facebook.svg"
                    alt="facebook icon"
                    width="33"
                    height="33"
                  />
                  <span>Facebook</span>
                </li>
              </a>
              <a
                aria-label="Deel op Twitter"
                href={`http://twitter.com/share?text=Bekijk dit project!&url=${window.location.href}`}
                target="_blank"
                rel="noopener"
              >
                <li>
                  <img
                    className={styles.icon}
                    src="/icons/twitter.svg"
                    alt="twitter icon"
                    width="33"
                    height="33"
                  />
                  <span>Twitter</span>
                </li>
              </a>

              <a
                aria-label="Mail project"
                href={`mailto:?subject=Bekijk dit gekke project &body=Bekijk het op de website ${window.location.href}`}
              >
                <li>
                  <img
                    className={styles.icon}
                    src="/icons/email.svg"
                    alt="email icon"
                    width="33"
                    height="33"
                  />
                  <span>Email</span>
                </li>
              </a>
              <li>
                <img
                  className={styles.icon}
                  src="/icons/print.svg"
                  alt="print icon"
                  width="33"
                  height="33"
                />
                <span>Print flyer</span>
              </li>
            </ul>
            <div className={styles.copy}>
              <p>Kopieer link</p>
              <div>
                <form>
                  <input
                    type="text"
                    ref={textAreaRef}
                    value={window.location.href}
                    onChange={(e) => {
                      setValue(e.target.checked);
                    }}
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
