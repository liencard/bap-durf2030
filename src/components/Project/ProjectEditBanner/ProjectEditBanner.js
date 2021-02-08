import styles from './ProjectEditBanner.module.scss';
import { useEffect, useState } from 'react';
import { Container } from '../../Layout';
import { Button } from '../../UI';
import { ROUTES } from '../../../consts/index';
import { useStores } from '../../../hooks/useStores';

const ProjectEditBanner = ({ project }) => {
  const { uiStore } = useStores();
  const [projectOwner, setProjectOwner] = useState(false);

  useEffect(() => {
    const loadOwner = async () => {
      const currentUser = await uiStore.currentUser;
      if (project && currentUser) {
        const projectOwner = project.owners.find(
          (owner) => owner.id === currentUser.id
        );
        if (projectOwner) {
          console.log(projectOwner);
          setProjectOwner(true);
        } else {
          setProjectOwner(false);
        }
      }
    };
    loadOwner();
  }, [uiStore.currentUser]);

  return (
    <>
      <div className={styles.banner}>
        <Container>
          {projectOwner && (
            <div className={styles.banner__wrapper}>
              <p>
                Jij bent organisator van dit project. Je project kan je ten alle
                tijden bewerken, zo hou je iedereen op de hoogte hoe je project
                groeit.
              </p>
              <div>
                <Button
                  text="Bewerk project"
                  href={ROUTES.edit.to + project.id}
                />
                <Button
                  text="Post update"
                  variant="outline"
                  href={ROUTES.edit.to + project.id}
                />
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default ProjectEditBanner;
