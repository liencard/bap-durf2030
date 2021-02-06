import { observer } from 'mobx-react-lite';
import styles from './OwnProjectCard.module.scss';
import Link from 'next/link';
import { ROUTES } from '../../../consts/index';
import { ProjectLikes, ProjectHelpers } from '../../Project';
import LinesEllipsis from 'react-lines-ellipsis';

const OwnProjectCard = observer(({ project }) => {
  console.log(project);

  const getState = (state) => {
    switch (state) {
      case 0:
        return 'In afwachting';
      case 1:
        return 'Lopend';
      default:
        return 'Onbekende status';
    }
  };

  const projectState = getState(project.state);

  return (
    <Link href={ROUTES.detail.to + project.id}>
      <a className={styles.card}>
        <div className={styles.thumbnail}>
          {(project.fundingRequired === true ||
            project.materialsRequired === true ||
            project.servicesRequired === true) && (
            <div className={styles.icons}>
              {project.servicesRequired && (
                <img src="/icons/service-white.svg" alt="service" />
              )}
              {project.materialsRequired && (
                <img src="/icons/material-white.svg" alt="materiaal" />
              )}
              {project.fundingRequired && (
                <img src="/icons/money-white.svg" alt="geld" />
              )}
            </div>
          )}
          <img
            className={styles.image}
            src="thumbnail-temp.jpg"
            alt="service"
          />
        </div>

        <div className={styles.content}>
          <p className={styles.status}>
            Status: <span>{projectState}</span>
          </p>
          <h3 className={styles.title}>{project.title}</h3>

          <div className={styles.intro}>
            <LinesEllipsis
              text={project.intro}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </div>

          <div className={styles.stats}>
            <ProjectLikes project={project} small />
            {project.durvers.length != 0 && (
              <ProjectHelpers small project={project} />
            )}
          </div>
        </div>
      </a>
    </Link>
  );
});

export default OwnProjectCard;
