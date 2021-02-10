import { useStores } from '../../../hooks/useStores';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '../../../components/UI';
import styles from './Settings.module.scss';
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import TextField from '@material-ui/core/TextField';

const Settings = observer(() => {
  const { userStore } = useStores();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(' ');

  userStore.loadAllUsers();
  let adminsArr = [];

  userStore.users.map((user) => {
    if (user.admin === true) {
      adminsArr.push(user);
    }
  });

  const handleDeleteAdmin = (user) => {
    userStore.updateAdmin(false, user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const user = userStore.users.find((user) => user.email === email);
    console.log(user);
    if (user) {
      userStore.updateAdmin(true, user);
      const err = '';
      setError(err);
      // adminsArr.push(user);
    } else {
      const err = 'Admin niet gevonden';
      setError(err);
    }
  };

  return (
    <>
      <div className={styles.admin}>
        <Sidebar />
        <section className={styles.content}>
          <div className={styles.header}>
            <div className={styles.header__left}>
              <h1 className={styles.title}>Instellingen</h1>
            </div>
            <Button text={'Voeg admin toe'} />
          </div>

          <section className={styles.admins__list}>
            <h2 className={styles.subtitle}>Alle admins</h2>
            <div className={styles.users}>
              {adminsArr.map((user) => (
                <div key={user.id} className={styles.user}>
                  <div className={styles.user__info}>
                    <img
                      className={styles.image}
                      src={user.avatar}
                      alt="profile picture of user"
                    />
                    <p>{user.name}</p>
                  </div>
                  <button
                    className={styles.delete}
                    onClick={() => handleDeleteAdmin(user)}
                  >
                    <img src="/icons/delete-red.svg" />
                    <span className="hidden">Verwijder</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.admins__add}>
            <h2 className={styles.subtitle}>Voeg admin toe</h2>
            <p className={styles.error}>{error}</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <TextField
                className={styles.textfield}
                fullWidth
                id="outlined-basic"
                label="Voeg admin toe"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <input
                className={styles.form__btn}
                type="submit"
                value="Toevoegen"
              />
            </form>
          </section>
        </section>
      </div>
    </>
  );
});

export default Settings;
