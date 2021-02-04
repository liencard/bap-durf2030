import { observer } from 'mobx-react-lite';
import styles from './ProjectHelpTwoFunding.module.scss';
import { FormFieldInput } from '../../Create';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';

const ProjectHelpTwoFunding = observer(({ project }) => {
  return (
    <>
      <h2 className={styles.title}>Geld geven</h2>
      <p>{project.fundingDescription}</p>
      <p>Weetje: voor elke €1 dat gecrowdfund wordt, legt DURF2030 €1 bij.</p>
      <div className={styles.funding}>
        <FormControl variant="outlined" fullWidth>
          <FormFieldInput
            type="number"
            name="fundingAmount"
            label="Funding"
            InputProps={{
              inputProps: { min: 1, max: 3000 },
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
            required
          />
          <FormHelperText id="outlined-weight-helper-text">
            Max 3000 euro
          </FormHelperText>
        </FormControl>
      </div>
    </>
  );
});

export default ProjectHelpTwoFunding;
