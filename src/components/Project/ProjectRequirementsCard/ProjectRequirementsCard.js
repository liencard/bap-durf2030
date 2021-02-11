import styles from './ProjectRequirementsCard.module.scss';
import { ProjectIcons } from '../';
import Link from 'next/link';
import { ROUTES } from '../../../consts/index';
import { useState, useEffect } from 'react';

const ProjectRequirementsCard = ({ project }) => {
  return (
    <Link href={ROUTES.detail.to + project.id}>
      <a className={styles.card__wrapper}>
        <section className={styles.card}>
          <img className={styles.image} src={project.image.url} />
          <div className={styles.text}>
            <ProjectIcons project={project} />
            <h2 className={styles.title}>{project.title}</h2>
            <ul>
              {project.services.map((service) => (
                <li>{service.name}</li>
              ))}
            </ul>
            <ul>
              {project.materials.map((material) => (
                <li>{material.name}</li>
              ))}
            </ul>
          </div>
        </section>
      </a>
    </Link>
  );
};

export default ProjectRequirementsCard;
