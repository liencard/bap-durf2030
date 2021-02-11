import { observer } from 'mobx-react-lite';
import { useStores } from '../../../hooks/useStores';
import { useState } from 'react';
import { OwnProjectCard } from '../';
import { ROUTES } from '../../../consts/index';
import { Button } from '../../../components/UI';
import styles from './OwnProjects.module.scss';

const OwnProjects = observer(({ projects }) => {
  const [step, setStep] = useState(0);

  const handleChangeStep = (step) => {
    setStep(step);
  };

  return (
    <>
      <section className={styles.projects}>
        <div className={styles.header}>
          <h1 className={styles.title}>Mijn Projecten</h1>
          <div className={styles.pagination}>
            {step !== 0 && (
              <button onClick={() => handleChangeStep(step - 1)}>
                <img src="/icons/arrow-dark.svg" width="6" height="10" alt="dark arrow icon left" />
              </button>
            )}
            <p>
              <span>0{step + 1}</span> / {projects.length}
            </p>
            {step !== projects.length - 1 && (
              <button onClick={() => handleChangeStep(step + 1)}>
                <img
                  className={styles.arrow__flipped}
                  src="/icons/arrow-dark.svg"
                  width="6"
                  height="10"
                  alt="dark arrow icon right"
                />
              </button>
            )}
          </div>
        </div>
        {projects.length !== 0 ? (
          <div className={styles.card} key={projects[step].id}>
            <OwnProjectCard project={projects[step]} />
            <section className={styles.activities}>
              <h3 className={styles.subtitle}>Recente activeiten</h3>
              {projects[step].durvers.length > 0 ? (
                projects[step].durvers.slice(0, 3).map((durver, i) => (
                  <article key={i} className={styles.activity}>
                    <span className={styles.name}>
                      <p>{durver.user.name}</p>
                      {durver.fundingOffered && (
                        <img className={styles.icon} src="/icons/money-yellow.svg" alt="icon" width="18" height="18" />
                      )}
                      {durver.materialsOffered && (
                        <img className={styles.icon} src="/icons/material-red.svg" alt="icon" width="15" height="15" />
                      )}
                      {durver.servicesOffered && (
                        <img className={styles.icon} src="/icons/service-green.svg" alt="icon" width="18" height="18" />
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
                        <span key={i}>
                          {offer.name}
                          {durver.offers.length !== i && ', '}
                        </span>
                      ))}
                    </p>
                  </article>
                ))
              ) : (
                <p>Geen activiteiten.</p>
              )}
            </section>
            <div className={styles.buttons}>
              <Button href={ROUTES.detail.to + projects[step].id} text={'Bekijk project'} />
              <Button href={ROUTES.edit.to + projects[step].id} text={'Bewerk project'} variant="outline" />
              <Button href={ROUTES.edit.to + projects[step].id} text={'Post update'} variant="outline" />
            </div>
          </div>
        ) : (
          <p>Geen eigen projecten</p>
        )}
      </section>
    </>
  );
});

export default OwnProjects;
