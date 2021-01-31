import { useState, useEffect } from 'react';
import { useStores } from '../../../hooks/useStores';
import styles from './ProjectComments.module.scss';
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
    // projectStore.getCommentsForProject(project).then((result) => {
    //   console.log(result);
    //   setComments(result);
    //   console.log(comments);
    // });
    // console.log('WERK');
    // console.log(comments);
    const loadComments = async () => {
      try {
        const result = await projectStore.getCommentsForProject(project);
        console.log('result');
        console.log(result);
        if (result.length === 0) {
          console.log('test');
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setState(STATE_FULLY_LOADED);
        setComments(result);
        console.log('comments');
        console.log(comments);
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

        {/* COMMENT */}
        <div className={styles.comment}>
          <div className={styles.user}>
            <img
              className={styles.image}
              src="/pfp-temp.jpg"
              alt="profielfoto van organisator"
            />
            <div>
              <p className={styles.name}>Naam Voornaam</p>
              <p className={styles.date}>x dagen geleden</p>
            </div>
          </div>
          <p>Tekstje</p>
        </div>

        {/* COMMENT */}
        <div className={styles.comment}>
          <div className={styles.user}>
            <img
              className={styles.image}
              src="/pfp-temp.jpg"
              alt="profielfoto van organisator"
            />
            <div>
              <p className={styles.name}>Naam Voornaam</p>
              <p className={styles.date}>x dagen geleden</p>
            </div>
          </div>
          <p>
            Dit is zeker iets leuks om samen te doen met de familie, ik help
            graag mee :)
          </p>
        </div>
      </div>

      {/* FORM */}
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
