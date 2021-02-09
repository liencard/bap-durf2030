import { observer } from 'mobx-react-lite';
import styles from './ProjectLikes.module.scss';
import Link from 'next/link';
import { useStores } from '../../../hooks/useStores';

const ProjectLikes = observer(({ project, small }) => {
  const { uiStore } = useStores();

  const toggleLike = () => {
    if (uiStore.currentUser) {
      if (project.liked) {
        project.removeLike(uiStore.currentUser.id);
      } else {
        project.addLike(uiStore.currentUser.id);
      }
    }
  };

  return (
    <>
      {!uiStore.currentUser ? (
        <Link href="/login">
          <button
            className={`${styles.likes} ${small && styles.small} ${
              project.liked && styles.liked
            }`}
          >
            <p>{project ? project.likes.length : 0}</p>
          </button>
        </Link>
      ) : (
        <button
          className={`${styles.likes} ${small && styles.small} ${
            project.liked && styles.liked
          }`}
          onClick={toggleLike}
        >
          <p>{project ? project.likes.length : 0}</p>
        </button>
      )}
    </>
  );
});

export default ProjectLikes;
