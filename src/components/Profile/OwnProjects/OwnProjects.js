import { observer } from 'mobx-react-lite';
import { useStores } from '../../../hooks/useStores';
import { useState, useEffect } from 'react';
import { Grid } from '../../Layout';
import { OwnProjectCard } from '../';
import { ROUTES } from '../../../consts/index';
import { Button } from '../../../components/UI';
import styles from './OwnProjects.module.scss';

const OwnProjects = observer(() => {
  const { uiStore } = useStores();
  const [projects, setProjects] = useState([]);
  const [step, setStep] = useState(0);
  const [currentProject, setCurrentProject] = useState(undefined);

  useEffect(() => {
    if (uiStore.currentUser && projects.length === 0) {
      const loadOwnProjects = async () => {
        await uiStore.getProjectsForUser();
      };
      loadOwnProjects();
    }
  }, [uiStore.currentUser]);

  useEffect(() => {
    const userProjects = uiStore.userProjects;
    setProjects(userProjects);

    if (userProjects.length > 0) {
      //setCurrentProject(userProjects[0]);
      setProjects(userProjects);
    }
  }, [uiStore.userProjects]);

  useEffect(() => {
    console.log(projects[0]);
    setCurrentProject(projects[0]);
  }, [projects]);

  const handleChangeStep = (step) => {
    setStep(step);
  };

  useEffect(() => {
    console.log(step);
    setCurrentProject(projects[step]);
  }, [step]);

  console.log(step);
  console.log(projects);

  return (
    <>
      <section className={styles.projects}>
        <div className={styles.header}>
          <h1 className={styles.title}>Mijn Projecten</h1>
          <div className={styles.pagination}>
            <button onClick={() => handleChangeStep(step - 1)}>
              <img
                src="/icons/arrow-dark.svg"
                width="6"
                height="10"
                alt="dark arrow icon left"
              />
            </button>
            <p>
              <span>01</span> / 04
            </p>
            <button onClick={() => handleChangeStep(step + 1)}>
              <img
                className={styles.arrow__flipped}
                src="/icons/arrow-dark.svg"
                width="6"
                height="10"
                alt="dark arrow icon right"
              />
            </button>
          </div>
        </div>
        {currentProject ? (
          <div className={styles.card} key={currentProject.id}>
            <OwnProjectCard project={currentProject} />
            <section className={styles.activities}>
              <h3 className={styles.subtitle}>Recente activeiten</h3>
              {currentProject.durvers.length > 3 ? (
                <>
                  {currentProject.durvers.slice(0, 3).map((durver) => (
                    <article className={styles.activity}>
                      <span className={styles.name}>
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
                    </article>
                  ))}
                </>
              ) : (
                <>
                  {currentProject.durvers.map((durver) => (
                    <article className={styles.activity}>
                      <span className={styles.name}>
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
                    </article>
                  ))}
                </>
              )}
            </section>
            <div className={styles.buttons}>
              <Button
                href={ROUTES.detail.to + currentProject.id}
                text={'Bekijk project'}
              />
              <Button
                href={ROUTES.edit.to + currentProject.id}
                text={'Bewerk project'}
                variant="outline"
              />
              <Button
                href={ROUTES.edit.to + currentProject.id}
                text={'Post update'}
                variant="outline"
              />
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
