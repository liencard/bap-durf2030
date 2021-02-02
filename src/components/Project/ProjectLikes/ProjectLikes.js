import { observer } from 'mobx-react-lite';
import styles from './ProjectLikes.module.scss';
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
    <button
      className={`${styles.likes} ${small && styles.small} ${project.liked && styles.liked}`}
      onClick={toggleLike}
    >
      <p>{project ? project.likes.length : 0}</p>
    </button>
  );
});

export default ProjectLikes;
