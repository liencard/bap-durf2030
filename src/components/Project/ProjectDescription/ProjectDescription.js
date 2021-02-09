import styles from './ProjectDescription.module.scss';
import { observer } from 'mobx-react-lite';
import { ProjectLikes, ProjectShare, ProjectHelp } from '../../Project';
import { ParsedRichText } from '../../UI';
import { useStores } from '../../../hooks/useStores';
import { useEffect, useState } from 'react';

const ProjectDescription = observer(({ project, users }) => {
  const [durversInfo, setDurversInfo] = useState([]);
  const [ownersInfo, setOwnersInfo] = useState([]);

  useEffect(() => {
    const durversArr = project.durvers.map((durver) => {
      let newDurver = users.find((existingUser) => durver.user.id === existingUser.id);
      newDurver.timestamp = durver.timestamp;
      return newDurver;
    });
    setDurversInfo(durversArr);

    const ownersArr = project.owners.map((owner) => {
      return users.find((existingUser) => owner.id === existingUser.id);
    });
    setOwnersInfo(ownersArr);
  }, [project.durvers, project.owners, users]);

  return (
    <>
      <div className={styles.text__wrapper}>
        {project.state > 3 && project.impact && (
          <div className={styles.impact}>
            <ParsedRichText html={project.impact} />
          </div>
        )}
        <ParsedRichText html={project.description} />
        <div className={styles.buttons}>
          <ProjectHelp project={project} />
          <div>
            <ProjectShare />
            <ProjectLikes project={project} />
          </div>
        </div>
      </div>
      <aside className={styles.details}>
        <div className={styles.creator__wrapper}>
          <h3 className={styles.creator__title}>Organisator(en)</h3>
          {ownersInfo.map((owner) => (
            <div key={owner.id} className={styles.creator}>
              <img className={styles.people__image} src={owner.avatar} alt="profielfoto van organisator" />
              <div>
                <span className={styles.name__wrapper}>
                  <p className={styles.creator__name}>{owner.name}</p>
                  {owner.awards.map((award) => (
                    <img key={award.name} width="20" height="20" src={award.img} />
                  ))}
                </span>
                <p className={styles.creator__organisation}>{owner.organisation}</p>
              </div>
            </div>
          ))}

          <p>{project.about}</p>
        </div>

        <div className={styles.helpers}>
          <h3 className={styles.helpers__title}>Durvers</h3>
          <p className={styles.helpers__subtitle}>Deze mensen durfden mee op de boot te springen voor dit project.</p>

          {durversInfo.slice(0, 3).map((durver) => (
            <div key={durver.id} className={styles.helper}>
              <img className={styles.image} src={durver.avatar} alt="profielfoto van organisator" />
              <div>
                <span className={styles.name__wrapper}>
                  <p className={styles.helper__name}>{durver.name}</p>
                  {durver.awards.map((award) => (
                    <img key={award.name} width="20" height="20" src={award.img} />
                  ))}
                </span>
                <p className={styles.date}>{project.getReadableDate(durver.timestamp)}</p>
              </div>
            </div>
          ))}

          {project.durvers.length > 3 && <a>Bekijk alle durvers</a>}
        </div>
      </aside>
    </>
  );
});

export default ProjectDescription;
