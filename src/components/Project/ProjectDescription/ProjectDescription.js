import styles from './ProjectDescription.module.scss';
import { observer } from 'mobx-react-lite';
import { ProjectLikes, ProjectShare } from '../../Project';
import { Button } from '../../UI';
import ReactHtmlParser from 'react-html-parser';

const ProjectDescription = observer(({ project }) => {
  console.log(project.durvers);
  return (
    <>
      <div className={styles.text__wrapper}>
        <div className={styles.text}>
          {ReactHtmlParser(project.description)}
        </div>
        <div className={styles.buttons}>
          <Button text="Ik durf mee te helpen" />
          <div>
            <ProjectShare />
            <ProjectLikes project={project} />
          </div>
        </div>
      </div>
      <aside className={styles.details}>
        <div className={styles.creator__wrapper}>
          <h3 className={styles.creator__title}>Organisator(en)</h3>
          {project.owners.map((owner) => (
            <div key={owner.id} className={styles.creator}>
              <img
                className={styles.people__image}
                src={owner.avatar}
                alt="profielfoto van organisator"
              />
              <div>
                <p className={styles.creator__name}>{owner.name}</p>
                <p className={styles.creator__organisation}>Individu</p>
              </div>
            </div>
          ))}

          <p>{project.about}</p>
        </div>

        <div className={styles.helpers}>
          <h3 className={styles.helpers__title}>Durvers</h3>
          <p className={styles.helpers__subtitle}>
            Deze mensen durfden mee op de boot te springen voor dit project.
          </p>
          {project.durvers.length > 3 ? (
            <>
              {project.durvers.slice(0, 3).map((durver) => (
                <div key={durver.timestamp.seconds} className={styles.helper}>
                  <img
                    className={styles.image}
                    src={durver.user.avatar}
                    alt="profielfoto van organisator"
                  />
                  <div>
                    <p className={styles.helper__name}>{durver.user.name}</p>
                    <p>Extra info</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {project.durvers.map((durver) => (
                <div key={durver.timestamp.seconds} className={styles.helper}>
                  <img
                    className={styles.image}
                    src={durver.user.avatar}
                    alt="profielfoto van organisator"
                  />
                  <div>
                    <p className={styles.helper__name}>{durver.user.name}</p>
                    <p>Extra info</p>
                  </div>
                </div>
              ))}
            </>
          )}
          <a>Bekijk alle durvers</a>
        </div>
      </aside>
    </>
  );
});

export default ProjectDescription;
