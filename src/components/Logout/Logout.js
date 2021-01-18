import React from 'react';
import { useStores } from '../../hooks/useStores';
import { useRouter } from 'next/router';
// import { useHistory } from 'react-router-dom';
// import { ROUTES } from '../../consts/index';

const Logout = () => {
  const router = useRouter();

  const { uiStore } = useStores();
  // const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    const result = uiStore.logoutUser();
    console.log(result);
    // history.push(ROUTES.login);
    router.push('/login');
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
