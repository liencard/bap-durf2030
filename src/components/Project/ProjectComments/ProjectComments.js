import { useState, useEffect } from 'react';
import { useStores } from '../../../hooks/useStores';
import styles from './ProjectComments.module.scss';
import ProjectComment from './ProjectComment';
import Comment from '../../../models/Comment';

const ProjectComments = ({ project }) => {
  const { uiStore, projectStore } = useStores();
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([]);

  const STATE_LOADING = 'loading';
  const STATE_DOES_NOT_EXIST = 'doesNotExist';
  const STATE_LOADING_MORE_DETAILS = 'loadingMoreDetails';
  const STATE_FULLY_LOADED = 'fullyLoaded';

  const [state, setState] = useState(
    comments ? STATE_LOADING_MORE_DETAILS : STATE_LOADING
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== '') {
      const newComment = new Comment({
        content,
        project,
        user: uiStore.currentUser,
      });
      projectStore.sendComment(newComment);
      setContent('');
    }
  };

  useEffect(() => {
    const loadComments = async () => {
      try {
        const result = await projectStore.getCommentsForProject(project);
        if (result.length === 0) {
          console.log('test');
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setState(STATE_FULLY_LOADED);
        setComments(result);
      } catch (error) {
        console.log('comments failed loading');
      }
    };
    loadComments();
  }, [projectStore, project, setComments]);

  return (
    <>
      <div className={styles.comments}>
        <h2 className={styles.title}>Comments</h2>

        {comments.length != 0 ? (
          <>
            {comments.map((comment) => (
              <ProjectComment key={comment.id} comment={comment} />
            ))}
          </>
        ) : (
          <div>
            <p>Geen commments</p>
          </div>
        )}
      </div>

      <div className={styles.create}>
        <p className={styles.title}>Laat een bericht achter</p>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>
            <span className={'hidden'}>Bericht</span>
            <textarea
              className={styles.textinput}
              placeholder="Type een bericht..."
              name="comment"
              cols="50"
              rows="5"
              required
              value={content}
              onChange={(e) => setContent(e.currentTarget.value)}
            />
          </label>
          <input className={styles.submit} type="submit" value="Verzenden" />
        </form>
      </div>
    </>
  );
};

export default ProjectComments;
