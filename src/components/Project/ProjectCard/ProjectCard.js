import styles from './ProjectCard.module.scss';
import Link from 'next/link';
import { ROUTES } from '../../../consts/index';
import { useEffect, useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import { ProjectLikes, ProjectHelpers } from '../';

const ProjectCard = ({ title, intro, id }) => {
  const { projectStore } = useStores();

  const tags = ['Cultuur', 'Theater'];

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const loadInfo = async () => {
      const info = await projectStore.loadRequirementListInfoById(id);
      setInfo(info);
    };
    loadInfo();
  }, [projectStore, setInfo]);

  console.log(info);

  return (
    <Link href={ROUTES.detail.to + id}>
      <a className={styles.card}>
        <div className={styles.thumbnail}>
          {/* {(info.fundingDetails.required === true ||
            info.materialsDetails.required === true ||
            info.servicesDetails.required === true) && ( 
            <div className={styles.icons}>
              {info.servicesDetails.required && (
                <img src="/icons/service-white.svg" alt="service" />
              )}
              {info.materialsDetails.required && (
                <img src="/icons/material-white.svg" alt="materiaal" />
              )}
              {info.fundingDetails.required && (
                <img src="/icons/money-white.svg" alt="geld" />
              )}
            </div>
          )}*/}
          <img
            className={styles.image}
            src="thumbnail-temp.jpg"
            alt="service"
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
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

          <p className={styles.intro}>{intro}</p>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
          <div className={styles.stats}>
            <ProjectLikes small />
            <ProjectHelpers small />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
