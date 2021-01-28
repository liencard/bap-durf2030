import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react-lite';

import { Container } from '../../components/Layout';
import Header from '../../components/Header/Header';
import styles from './Profile.module.scss';

const Profile = observer(() => {
  const { projectStore, userStore, uiStore } = useStores();

  if (uiStore.currentUser) {
    console.log(uiStore.currentUser);
    console.log(projectStore.projects);
  }

  return (
    <>
      <Header />
      <div className={styles.profile}>
        <p>{uiStore.currentUser.id}</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    </>
  );
});

// export const getStaticProps = async ({ preview = null }) => {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   //const res = await fetch('https://.../posts');
//   //const posts = await res.json();

//   const { projectStore, userStore, uiStore } = useStores();

//   if (uiStore.currentUser) {
//     console.log(uiStore.currentUser);
//     console.log(projectStore.projects);
//   }

//   return {
//     props: {
//       currentUser,
//     },
//   };
// };

export default Profile;
