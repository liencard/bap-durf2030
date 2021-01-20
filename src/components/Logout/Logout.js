import React from 'react';
import { useStores } from '../../hooks/useStores';
import { useRouter } from 'next/router';
import { ROUTES } from '../../consts/index';

const Logout = () => {
  const router = useRouter();
  const { uiStore } = useStores();

  const handleLogout = async (e) => {
    e.preventDefault();
    const result = await uiStore.logoutUser();
    router.push(ROUTES.home);
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
