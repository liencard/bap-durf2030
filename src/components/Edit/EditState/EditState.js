import { observer } from 'mobx-react-lite';
import styles from './EditState.module.scss';
import { EditPart, EditLabel } from '..';
import { Button } from '../../UI';
import { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const EditState = observer(({ project }) => {
  const [content, setContent] = useState({});

  const handleChangeState = (state) => {
    project.updateState(state);
  };

  useEffect(() => {
    switch (project.state) {
      case 0:
        setContent({
          info: '0 Je project staat live op de website maar is nog niet goedgekeurd door DURF2030.',
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
          info: '1 Je project staat live op de website maar is nog niet goedgekeurd door DURF2030.',
          change: (
            <>
              <p>
                Heb je alles om je project van start te laten gaan? Eenmaal je klikt op op ‘Klaar om te starten’, wordt
                het aanbieden van diensten, materiaal en geld vergrendeld.
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
            '2 Je project is klaar om te starten! Laat gebruikers weten waar en wanneer ze je project live kunnen bezichtigen.',
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
      default:
      // code block
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
              {/* <li>Vlagje</li> */}
            </ul>
          </div>
        </div>
        <div>
          <h2 className={styles.subtitle}>Status veranderen</h2>
          {content.change}
        </div>
      </div>
    </>
  );
});

export default EditState;
