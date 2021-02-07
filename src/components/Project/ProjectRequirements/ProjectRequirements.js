import styles from './ProjectRequirements.module.scss';
import {
  ProjectRequirementsServices,
  ProjectRequirementsMaterials,
  ProjectRequirementsFunding,
} from '../../Project';

const ProjectRequirements = ({ project }) => {
  return (
    <>
      <div className={styles.requirements}>
        {/* CROWDFUNDING */}
        {project.fundingRequired ? (
          <ProjectRequirementsFunding project={project} />
        ) : (
          ''
        )}
        {/* DIENSTEN */}
        {project.services.length != 0 ? (
          <ProjectRequirementsServices project={project} />
        ) : (
          ''
        )}
        {/* MATERIAAL */}
        {project.materials.length != 0 ? (
          <ProjectRequirementsMaterials project={project} />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ProjectRequirements;
