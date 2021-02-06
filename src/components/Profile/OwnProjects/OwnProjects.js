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

  console.log(projects);

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
  }, [uiStore.userProjects]);

  return (
    <>
      <div className={styles.projects}>
        <h1 className={styles.title}>Mijn Projecten</h1>
        {projects ? (
          <>
            {projects.map((project, i) => (
              <div className={styles.card} key={i}>
                <OwnProjectCard key={project.id} project={project} />
                <section className={styles.activities}>
                  <h3 className={styles.subtitle}>Recente activeiten</h3>
                  {project.durvers.length > 3 ? (
                    <>
                      {project.durvers.slice(0, 3).map((durver) => (
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
                      {project.durvers.map((durver) => (
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
                    href={ROUTES.detail.to + project.id}
                    text={'Bekijk project'}
                  />
                  <Button
                    href={ROUTES.edit.to + project.id}
                    text={'Bewerk project'}
                    variant="outline"
                  />
                  <Button
                    href={ROUTES.edit.to + project.id}
                    text={'Post update'}
                    variant="outline"
                  />
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Geen eigen projecten</p>
        )}
      </div>
    </>
  );
});

export default OwnProjects;
