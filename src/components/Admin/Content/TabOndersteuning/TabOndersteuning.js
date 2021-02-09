import { observer } from 'mobx-react-lite';
import styles from './TabOndersteuning.module.scss';
import { SectionPart } from '../index';

const TabOndersteuning = observer(({ project }) => {
  console.log(project);
  return (
    <>
      <div className={styles.overview}>
        <SectionPart title="Vrijwilligers">
          {project.servicesRequired ? (
            <>
              <h3 className={styles.subtitle}>Opsomming</h3>
              {project.services.length != 0 ? (
                <>
                  {project.services.map((service) => (
                    <div className={styles.item}>
                      <span className={styles.item__amount}>
                        {service.amount}
                      </span>
                      <span className={styles.item__name}>{service.name}</span>
                    </div>
                  ))}
                </>
              ) : (
                'Geen soorten vrijwilligers opgegeven'
              )}
              <h3 className={styles.subtitle}>Verantwoording</h3>
              <p className={styles.frame}>{project.servicesDescription}</p>
            </>
          ) : (
            'Dit project vraagt geen extra vrijwillers aan.'
          )}
        </SectionPart>
        <SectionPart title="Materialen">
          {project.materialsRequired ? (
            <>
              <h3 className={styles.subtitle}>Opsomming</h3>
              {project.materials.length != 0 ? (
                <>
                  {project.materials.map((material) => (
                    <div className={styles.item}>
                      <span className={styles.item__amount}>
                        {material.amount}
                      </span>
                      <span className={styles.item__name}>{material.name}</span>
                    </div>
                  ))}
                </>
              ) : (
                'Geen materialen opgegeven'
              )}
              <h3 className={styles.subtitle}>Verantwoording</h3>
              <p className={styles.frame}>{project.materialsDescription}</p>
            </>
          ) : (
            'Dit project vraagt geen extra materiaal aan.'
          )}
        </SectionPart>

        <SectionPart title="Donaties">
          {project.fundingRequired ? (
            <>
              <h3 className={styles.subtitle}>Budget</h3>
              <p className={styles.frame}>€{project.fundingAmount}</p>
              <h3 className={styles.subtitle}>Verantwoording</h3>
              <p className={styles.frame}>{project.fundingDescription}</p>
            </>
          ) : (
            'Dit project heeft geen nood aan crowdfunding.'
          )}
        </SectionPart>
      </div>
    </>
  );
});

export default TabOndersteuning;
