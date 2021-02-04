import styles from './ProjectCard.module.scss';
import Link from 'next/link';
import { ROUTES } from '../../../consts/index';
import { useEffect, useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import { ProjectLikes, ProjectHelpers } from '../';
import { observer } from 'mobx-react-lite';

const ProjectCard = ({ project }) => {
  const tags = ['Cultuur', 'Theater'];

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
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.author__wrapper}>
            <div className={styles.author}>
              <img
                className={styles.author__image}
                src="pfp-temp.jpg"
                alt="profielfoto van organisator"
              />
              <p className={styles.author__name}>John Doe</p>
            </div>
            <p className={styles.date}>6 dagen geleden</p>
          </div>

          <p className={styles.intro}>{project.intro}</p>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
          <div className={styles.stats}>
            {/* <ProjectLikes project={project} small /> */}
            {project.durvers.length != 0 && (
              <ProjectHelpers small project={project} />
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
