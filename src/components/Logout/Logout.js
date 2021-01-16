import React from 'react';
import { useStores } from '../../hooks/useStores';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../consts/index';

const Logout = () => {
  const { uiStore } = useStores();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    const result = uiStore.logoutUser();
    console.log(result);
    history.push(ROUTES.login);
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
