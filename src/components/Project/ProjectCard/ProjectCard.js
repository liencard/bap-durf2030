import { observer } from 'mobx-react-lite';
import styles from './ProjectCard.module.scss';
import Link from 'next/link';
import { ROUTES } from '../../../consts/index';
import { ProjectLikes, ProjectHelpers } from '../';
import LinesEllipsis from 'react-lines-ellipsis';

const ProjectCard = observer(({ project }) => {
  let tags = [];
  // Object.keys(project.themes).forEach((key) => {
  //   if (project.themes[key] === true) {
  //     tags.push(key);
  //   }
  // });

  Object.keys(project.categories).forEach((key) => {
    if (project.categories[key] === true) {
      tags.push(key);
    }
  });

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
          <p className={styles.date}>6 dagen geleden</p>
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
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
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

export default ProjectCard;
