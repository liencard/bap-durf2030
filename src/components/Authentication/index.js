// import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../consts';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';
// import Logout from '../Logout/Logout';
//import style from './Authentication.module.css';

import { useStores } from '../../hooks/useStores';
// import { useObserver } from 'mobx-react-lite';
import Link from 'next/link';

const Authentication = () => {
  const { uiStore } = useStores();

  // console.log(uiStore.currentUser);

  return (
    <>
      <p>Authentication</p>

      {/* <Switch>
        <Route exact path={ROUTES.login}>
          {uiStore.currentUser ? <Redirect to={ROUTES.home} /> : <LoginForm />}
        </Route>

        <Route exact path={ROUTES.register}>
          {uiStore.currentUser ? <Redirect to={ROUTES.home} /> : <RegisterForm />}
        </Route>

        <Route path={ROUTES.home}>
          {uiStore.currentUser ? (
            <>
              <h1>Dag, user </h1>
              <Logout />
            </>
          ) : (
            <Redirect to={ROUTES.login} />
          )}
        </Route>
      </Switch> */}
    </>
  );
};

export default Authentication;
