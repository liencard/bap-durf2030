import styles from './ProjectDescription.module.scss';
import { ProjectLikes } from '../../Project';
import Button from '../../Button/Button';

const ProjectDescription = () => {
  return (
    <>
      <div className={styles.text__wrapper}>
        <div className={styles.text}>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <img className={styles.text__img} src="/pfp-temp.jpg" alt="profielfoto van organisator" />
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
        <div className={styles.buttons}>
          <Button text="Ik durf mee te helpen" />
          <div>
            <p>Delen</p>
            <ProjectLikes />
          </div>
        </div>
      </div>
      <aside className={styles.details}>
        <div className={styles.creator__wrapper}>
          <div className={styles.creator}>
            <img className={styles.creator__image} src="/pfp-temp.jpg" alt="profielfoto van organisator" />
            <div>
              <h3>Organisator</h3>
              <p>Naam Voornaam</p>
            </div>
          </div>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
        </div>
        <div className={styles.helpers}>
          <h3>Durvers</h3>
          <p>Deze mensen durfden mee op de boot te springen voor dit project.</p>
          <div className={styles.helper}>
            <img src="/pfp-temp.jpg" alt="profielfoto van organisator" />
            <div>
              <p className={styles.helper__name}>John Doe</p>
              <p>Extra info</p>
            </div>
          </div>
          <div className={styles.helper}>
            <img src="/pfp-temp.jpg" alt="profielfoto van organisator" />
            <div>
              <p className={styles.helper__name}>John Doe</p>
              <p>Extra info</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProjectDescription;
