import styles from './ProjectCard.module.scss';
import Link from 'next/link';
import { ROUTES } from '../../consts/index';

const ProjectCard = ({ title, intro, id }) => {
  const durvers = [
    {
      id: 1,
      img: 'pfp-temp.jpg',
    },
    {
      id: 2,
      img: 'pfp-temp.jpg',
    },
    {
      id: 3,
      img: 'pfp-temp.jpg',
    },
    {
      id: 4,
      img: 'pfp-temp.jpg',
    },
  ];
  const tags = ['Cultuur', 'Theater'];

  return (
    <Link href={ROUTES.detail.to + id}>
      <a className={styles.card}>
        <div className={styles.thumbnail}>
          <div className={styles.icons}>
            <img src="/icons/material-white.svg" alt="materiaal" />
            <img src="/icons/money-white.svg" alt="geld" />
            <img src="/icons/service-white.svg" alt="service" />
          </div>
          <img className={styles.image} src="thumbnail-temp.jpg" alt="service" />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.author__wrapper}>
            <div className={styles.author}>
              <img className={styles.author__image} src="pfp-temp.jpg" alt="profielfoto van organisator" />
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
            <div className={styles.likes}>
              <img src="/icons/like-default.svg" alt="duim omhoog" />
              52 likes
            </div>
            <div className={styles.helpers}>
              <div className={styles.helpers__pictures}>
                {durvers.slice(0, 3).map((durver) => (
                  <div key={durver.id}>
                    <img src={durver.img} alt="profielfoto van mede-durver" />
                  </div>
                ))}
              </div>
              + 8 durvers
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;