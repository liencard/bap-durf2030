import styles from '../ProjectRequirements/ProjectRequirements.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useStores } from '../../../hooks/useStores';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { ProjectHelpers } from '..';

const ProjectRequirementsMaterials = ({ project, materials }) => {
  const { projectStore } = useStores();

  const [bouw, setBouw] = useState('');
  const [art, setArt] = useState('');
  const [infra, setInfra] = useState('');
  const [food, setFood] = useState('');
  const [toys, setToy] = useState('');
  const [divers, setDivers] = useState('');

  useEffect(() => {
    let bouwArr = [];
    let artArr = [];
    let infraArr = [];
    let foodArr = [];
    let toyArr = [];
    let diversArr = [];

    const loadMaterial = async () => {
      materials.forEach((material) => {
        if (material.category === 'Bouwmateriaal') {
          bouwArr.push(material);
          setBouw(bouwArr);
        } else if (material.category === 'Eten & Drinken') {
          foodArr.push(material);
          setFood(foodArr);
        } else if (material.category === 'Infrastructuur') {
          infraArr.push(material);
          setInfra(infraArr);
        } else if (material.category === 'Knutselmateriaal') {
          artArr.push(material);
          setArt(artArr);
        } else if (material.category === 'Speelgoed') {
          toyArr.push(material);
          setToy(toyArr);
        } else if (service.category === 'Andere') {
          diversArr.push(service);
          setDivers(diversArr);
        }
      });
    };
    loadMaterial();
  }, [projectStore, setBouw, setArt, setFood, setInfra, setToy, setDivers]);

  return (
    <>
      <section className={styles.requirement}>
        <Container>
          <div className={`${styles.circle} ${styles.material}`} />
          <div className={styles.content}>
            <h2 className={styles.title}>Materiaal</h2>
            <div className={styles.wrapper}>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui
              </p>

              <div className={styles.list}>
                {bouw.length != 0 ? (
                  <article className={styles.list__item}>
                    <h3>Bouwmateriaal</h3>
                    {bouw.map((item) => (
                      <span key={item.id}>
                        <span>
                          {item.amount} {item.name}
                        </span>
                        ,{' '}
                      </span>
                    ))}
                  </article>
                ) : (
                  ''
                )}
                {food.length != 0 ? (
                  <article className={styles.list__item}>
                    <h3>Eten &amp; Drinken</h3>
                    {food.map((item) => (
                      <span key={item.id}>
                        <span>
                          {item.amount} {item.name}
                        </span>
                        ,{' '}
                      </span>
                    ))}
                  </article>
                ) : (
                  ''
                )}
                {infra.length != 0 ? (
                  <article className={styles.list__item}>
                    <h3>Infrastructuur</h3>
                    {infra.map((item) => (
                      <span key={item.id}>
                        <span>
                          {item.amount} {item.name}
                        </span>
                        ,{' '}
                      </span>
                    ))}
                  </article>
                ) : (
                  ''
                )}
                {art.length != 0 ? (
                  <article className={styles.list__item}>
                    <h3>Knutselmateriaal</h3>
                    {art.map((item) => (
                      <span key={item.id}>
                        <span>
                          {item.amount} {item.name}
                        </span>
                        ,{' '}
                      </span>
                    ))}
                  </article>
                ) : (
                  ''
                )}
                {toys.length != 0 ? (
                  <article className={styles.list__item}>
                    <h3>Speelgoed</h3>
                    {toys.map((item) => (
                      <span key={item.id}>
                        <span>
                          {item.amount} {item.name}
                        </span>
                        ,{' '}
                      </span>
                    ))}
                  </article>
                ) : (
                  ''
                )}
                {divers.length != 0 ? (
                  <article className={styles.list__item}>
                    <h3>Andere hulp</h3>
                    {divers.map((item) => (
                      <span key={item.id}>
                        <span>
                          {item.amount} {item.name}
                        </span>
                        ,{' '}
                      </span>
                    ))}
                  </article>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className={styles.footer}>
              <ProjectHelpers />
              <Button text={'Hulp aanbieden'} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectRequirementsMaterials;
