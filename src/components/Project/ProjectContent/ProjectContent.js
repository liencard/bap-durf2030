import styles from './ProjectContent.module.scss';

const ProjectContent = () => {
  return (
    <>
      <div className={styles.text}>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
      <aside className={styles.details}>
        <h2>Organisator</h2>
        <p>Naam Voornaam</p>
      </aside>
    </>
  );
};

export default ProjectContent;
