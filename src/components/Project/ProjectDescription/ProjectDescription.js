import styles from './ProjectDescription.module.scss';
import { observer } from 'mobx-react-lite';
import { ProjectLikes, ProjectShare, ProjectHelp } from '../../Project';
import { Button } from '../../UI';
import { useStores } from '../../../hooks/useStores';
import ReactHtmlParser from 'react-html-parser';

const ProjectDescription = observer(({ project, users }) => {
  const { uiStore } = useStores();
  let durversInfo = [];
  let ownersInfo = [];

  project.durvers.forEach((durver) => {
    const newDurver = users.find((existingUser) => durver.user.id === existingUser.id);
    durversInfo.push(newDurver);
  });

  project.owners.forEach((owner) => {
    const newOwner = users.find((existingUser) => owner.id === existingUser.id);
    ownersInfo.push(newOwner);
  });

  return (
    <>
      <div className={styles.text__wrapper}>
        {project.state > 3 && project.impact && (
          <div className={styles.impact}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum mus, vel malesuada sed erat rutrum
            parturient magna ultrices, molestie viverra netus quisque curae nascetur diam risus. Turpis justo posuere
            nascetur libero enim tellus, purus elementum ligula rhoncus urna, donec malesuada scelerisque mi per. Lectus
            nibh suspendisse dictumst ornare nullam fringilla sed habitasse platea, arcu eu malesuada bibendum volutpat
            at suscipit ut, sagittis ullamcorper parturient euismod aenean massa placerat luctus.
          </div>
        )}
        <div className={styles.text}>{ReactHtmlParser(project.description)}</div>
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
                <p className={styles.creator__organisation}>Individu</p>
              </div>
            </div>
          ))}

          <p>{project.about}</p>
        </div>

        <div className={styles.helpers}>
          <h3 className={styles.helpers__title}>Durvers</h3>
          <p className={styles.helpers__subtitle}>Deze mensen durfden mee op de boot te springen voor dit project.</p>
          {project.durvers.length > 3 ? (
            <>
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
                    <p>Extra info</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {durversInfo.map((durver) => (
                <div key={durver.id} className={styles.helper}>
                  <img className={styles.image} src={durver.avatar} alt="profielfoto van organisator" />
                  <div>
                    <span className={styles.name__wrapper}>
                      <p className={styles.helper__name}>{durver.name}</p>
                      {durver.awards.map((award) => (
                        <img key={award.name} width="20" height="20" src={award.img} />
                      ))}
                    </span>
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
