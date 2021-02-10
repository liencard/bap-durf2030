import { observer } from 'mobx-react-lite';
import styles from './EditState.module.scss';
import { EditPart, EditLabel, EditField, EditDelete } from '..';
import { Button } from '../../UI';
import { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { FormFieldRichTextEditor, FormFieldInput, FormFieldSwitch, FormFieldSelect } from '../../Create';
import { useRouter } from 'next/router';
import { ROUTES } from '../../../consts/index';

const EditState = observer(({ project }) => {
  const [content, setContent] = useState({});
  const [isKnownPlace, setIsKnownPlace] = useState(true);
  const router = useRouter();

  const handleChangeState = (state) => {
    project.updateState(state);
  };

  const handleSaveProject = (values) => {
    console.log(values);
    let updatedValues = {};

    if (values.startdate || values.enddate) {
      updatedValues.date = {};
    }

    Object.keys(values).forEach((key) => {
      if (key === 'startdate') {
        updatedValues.date.start = values[key];
      } else if (key === 'enddate') {
        updatedValues.date.end = values[key];
      } else {
        updatedValues[key] = values[key];
      }
    });

    project.updateProject(updatedValues);
  };

  const handleDeleteProject = () => {
    project.deleteProject();
    router.push(ROUTES.profile);
  };

  useEffect(() => {
    switch (project.state) {
      case 0:
        setContent({
          info: 'Je project staat live op de website maar is nog niet goedgekeurd door DURF2030.',
          change: (
            <p>
              Om crowdfunding mogelijk te maken, moet een project voldoen aan 3 criteria. Zodra DURF2030 je project
              overloopt en goedgkeurd, zal je geld kunnen inzamelen voor je project.
            </p>
          ),
        });
        break;
      case 1:
        setContent({
          info: 'Je project staat live op de website maar is nog niet goedgekeurd door DURF2030.',
          change: (
            <>
              <p>
                Heb je alles om je project van start te laten gaan? Eenmaal je klikt op op ‘Klaar om te starten’, wordt
                het aanbieden als vrijwilligers en van materiaal en geld vergrendeld.
              </p>
              <div className={styles.buttons}>
                <Button text="Mijn project gaat van start" onClick={() => handleChangeState(2)} />
              </div>
            </>
          ),
        });
        break;
      case 2:
        setContent({
          info:
            'Je project is klaar om te starten! Laat gebruikers weten waar en wanneer ze je project live kunnen bezichtigen.',
          change: (
            <>
              <p>
                Is je project volledig afgerond? Indien je project afgelopen is, dan kan je gebruikers dit laten weten.
                Je project blijft zichtbaar op de website.
              </p>
              <div className={styles.buttons}>
                <Button text="Project afronden" onClick={() => handleChangeState(3)} />
                <Button text="Naar vorige fase" variant="secondary" onClick={() => handleChangeState(1)} />
              </div>
            </>
          ),
        });
        break;
      case 3:
        setContent({
          info: 'Je project is volledig afgerond!',
          change: (
            <>
              <p>Je project is afgerond. Laat gebruikers en DURF2030 weten hoe je project is verlopen.</p>
              <div className={styles.buttons}>
                <Button text="Project terug open zetten" variant="secondary" onClick={() => handleChangeState(2)} />
              </div>
            </>
          ),
        });
        break;
    }
  }, [project.state]);

  return (
    <>
      <div className={styles.status}>
        <div>
          <h2 className={styles.subtitle}>Huidige status</h2>
          <p>{content.info}</p>
          <div className={styles.timeline}>
            <LinearProgress variant="determinate" value={project.state * 33.33} />
            <ul className={styles.points}>
              <li>Project is opgezet</li>
              <li>Crowdfunding is mogelijk</li>
              <li>Klaar om te starten</li>
              <li>&#127937;</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className={styles.subtitle}>Status veranderen</h2>
          {content.change}
        </div>
      </div>

      {project.state == 3 && (
        <EditPart alwaysEnabled title="Deel je ervaring" handleSaveProject={handleSaveProject}>
          <EditField>
            <EditLabel text="Beschrijf" htmlFor="impact" />
            <p>
              Laat gebruikers weten wat voor impact jou project had, de ervaring die je hebt opgedaan en eventuele
              foto's achter de schermen!
            </p>
            <FormFieldRichTextEditor defaultValue={project.impact} name="impact" />
          </EditField>
        </EditPart>
      )}

      {project.state > 1 && (
        <EditPart title="Datum en locatie" handleSaveProject={handleSaveProject}>
          <div className={styles.dates}>
            <EditField>
              <EditLabel text="Start datum" htmlFor="startdate" />
              <FormFieldInput name="startdate" type="date" />
            </EditField>
            <EditField>
              <EditLabel text="Eind datum" htmlFor="enddate" />
              <FormFieldInput name="enddate" type="date" />
            </EditField>
          </div>
          <div className={`${styles.field__wrapper} ${styles.field__wrapperRow}`}>
            <EditLabel text="Weet je in welke stad je project doorgaat?" htmlFor="isKnownPlace" />
            <div className={styles.form__switch}>
              <span className={styles.place__label}>Nee</span>
              <FormFieldSwitch
                name="isKnownPlace"
                label="isKnownPlace"
                setToggleValue={setIsKnownPlace}
                defaultValue={project.isKnownPlace}
              />
              <span className={styles.place__label}>Ja</span>
            </div>
          </div>

          {isKnownPlace && (
            <>
              <div className={styles.location}>
                <EditField>
                  <EditLabel text="Stad" htmlFor="city" />
                  <FormFieldSelect name="city" options={['Kortrijk', 'Izegem']} defaultValue="Kortrijk" />
                </EditField>
                <EditField>
                  <EditLabel text="Straat" htmlFor="street" />
                  <FormFieldInput defaultValue={project.street} name="street" />
                </EditField>
                <EditField>
                  <EditLabel text="Nr" htmlFor="number" />
                  <FormFieldInput defaultValue={project.number} name="number" />
                </EditField>
              </div>
            </>
          )}
        </EditPart>
      )}
      <EditPart title="Project deactiveren" handleSaveProject={handleDeleteProject}>
        <div className={styles.deactivate}>
          <p className={styles.info}>
            Wens je het project volledig stop te zetten? Dan kan je je project hier verwijderen. Let op, eenmaal dit
            verwijderd is kan je niet meer terug!
          </p>
          <EditDelete name="delete" />
        </div>
      </EditPart>
    </>
  );
});

export default EditState;
