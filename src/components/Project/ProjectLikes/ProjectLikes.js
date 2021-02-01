import styles from './ProjectLikes.module.scss';

const ProjectLikes = ({ likes, small }) => (
  <button className={`${styles.likes} ${small && styles.small}`}>
    <img src="/icons/like-default.svg" alt="duim omhoog" />
    <p>{likes} likes</p>
  </button>
);
export default ProjectLikes;
