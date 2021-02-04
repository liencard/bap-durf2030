import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import styles from './ProjectDurvers.module.scss';
import { Button } from '../../UI';

const ProjectDurvers = observer(({ project }) => {
  console.log(project.durvers);

  return (
    <>
      <section className={styles.header}>
        <h2 className={styles.title}>
          Alle durvers ({project.durvers.length})
        </h2>
        <Button text={'Wordt durver'} />
      </section>
      {project.durvers.map((durver) => (
        <div className={styles.durver}>
          <div className={styles.user}>
            <img
              className={styles.image}
              src={durver.user.avatar}
              alt="profielfoto van organisator"
            />
            <div className={styles.wrapper}>
              <span>
                <p>{durver.user.name}</p>
                {durver.fundingOffered && (
                  <img
                    className={styles.icon}
                    src="/icons/money-yellow.svg"
                    alt="icon"
                    width="18"
                    height="18"
                  />
                )}
                {durver.materialsOffered && (
                  <img
                    className={styles.icon}
                    src="/icons/mmmaterial-red.svg"
                    alt="icon"
                    width="15"
                    height="15"
                  />
                )}
                {durver.servicesOffered && (
                  <img
                    className={styles.icon}
                    src="/icons/service-green.svg"
                    alt="icon"
                    width="18"
                    height="18"
                  />
                )}
              </span>
              <p className={styles.offer}>
                {durver.fundingOffered && (
                  <span>
                    {durver.fundingAmount} EUR
                    {durver.offers.length != 0 && ', '}
                  </span>
                )}
                {durver.offers.map((offer, i) => (
                  <span>
                    {offer.name}
                    {durver.offers.length !== i && ', '}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <p>{durver.message}</p>
        </div>
      ))}
    </>
  );
});

export default ProjectDurvers;
