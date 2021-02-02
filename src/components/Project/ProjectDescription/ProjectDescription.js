import styles from './ProjectDescription.module.scss';
import { ProjectLikes, ProjectCreatorImage, ProjectShare } from '../../Project';
import { Button } from '../../UI';
import ReactHtmlParser from 'react-html-parser';

const ProjectDescription = ({ project }) => {
  console.log(project);
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
          <div className={styles.helper}>
            <ProjectCreatorImage />
            <div>
              <p className={styles.helper__name}>John Doe</p>
              <p>Extra info</p>
            </div>
          </div>
          <div className={styles.helper}>
            <ProjectCreatorImage />
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
