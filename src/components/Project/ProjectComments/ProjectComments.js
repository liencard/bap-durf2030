import styles from './ProjectComments.module.scss';

const ProjectComments = () => {
  return (
    <>
      <div className={styles.comments}>
        <h2 className={styles.title}>Comments</h2>
        <div className={styles.comment}>
          <div className={styles.user}>
            <img className={styles.image} src="/pfp-temp.jpg" alt="profielfoto van organisator" />
            <div>
              <p className={styles.name}>Naam Voornaam</p>
              <p className={styles.date}>x dagen geleden</p>
            </div>
          </div>
          <p>Tekstje</p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <img className={styles.image} src="/pfp-temp.jpg" alt="profielfoto van organisator" />
            <div>
              <p className={styles.name}>Naam Voornaam</p>
              <p className={styles.date}>x dagen geleden</p>
            </div>
          </div>
          <p>Dit is zeker iets leuks om samen te doen met de familie, ik help graag mee :)</p>
        </div>
      </div>
      <div className={styles.create}>
        <p className={styles.title}>Laat een bericht achter</p>
        <form>
          <label className={styles.label}>
            <span className={'hidden'}>Bericht</span>
            <textarea
              className={styles.textinput}
              placeholder="Type een bericht..."
              name="comment"
              cols="50"
              rows="5"
              required
            />
          </label>
          <input className={styles.submit} type="submit" value="Verzenden" />
        </form>
      </div>
    </>
  );
};

export default ProjectComments;
