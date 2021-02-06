import { observer } from 'mobx-react-lite';
import styles from './ProjectCard.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '../../../consts/index';
import { ProjectLikes, ProjectHelpers, ProjectIcons } from '../';
import LinesEllipsis from 'react-lines-ellipsis';

const ProjectCard = observer(({ project }) => {
  const [image, setImage] = useState('thumbnail-temp.jpg');
  let tags = [];
  // Object.keys(project.themes).forEach((key) => {
  //   if (project.themes[key] === true) {
  //     tags.push(key);
  //   }
  // });

  useEffect(() => {
    if (project.image.enabled && project.image.url) {
      setImage(project.image.url);
    }
  }, []);

  Object.keys(project.categories).forEach((key) => {
    if (project.categories[key] === true) {
      tags.push(key);
    }
  });

  return (
    <Link href={ROUTES.detail.to + project.id}>
      <a className={styles.card}>
        <div className={styles.thumbnail}>
          <ProjectIcons project={project} />
          <img className={styles.image} src={image} alt="service" />
        </div>

        <div className={styles.content}>
          <p className={styles.date}>6 dagen geleden</p>
          <h3 className={styles.title}>{project.title}</h3>

          <p className={styles.intro}>
            <LinesEllipsis text={project.intro} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
          </p>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
          <div className={styles.stats}>
            <ProjectLikes project={project} small />
            {project.durvers.length != 0 && <ProjectHelpers small project={project} />}
          </div>
        </div>
      </a>
    </Link>
  );
});

export default ProjectCard;
