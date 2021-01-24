import { useState, useRef } from 'react';
import styles from './AuthPasswordReset.module.scss';
import TextField from '@material-ui/core/TextField';
import { Modal, Button } from '../../UI';
import firebase from 'firebase/app';

const PasswordReset = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResetPassword = () => {
    const auth = firebase.auth();
    const emailAddress = email;

    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        setOpen(false);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <>
      <Modal open={open} handleClose={handleClose}>
        <h2 className={styles.title} id="transition-modal-title">
          Wachtwoord vergeten
        </h2>
        <p>
          Weet je het wachtwoord niet meer? Vul hieronder je e-mailadres in. We
          sturen dan binnen enkele minuten een e-mail waarmee een nieuw
          wachtwoord kan worden aangemaakt.
        </p>
        <TextField
          className={styles.textfield}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Button text="Verzenden" onClick={handleResetPassword} />
      </Modal>
      <button className={styles.forgot} onClick={handleOpen}>
        Wachtwoord vergeten?
      </button>
    </>
  );
};
export default PasswordReset;
