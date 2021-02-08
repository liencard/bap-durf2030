import styles from './AppBar.module.scss';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import { Container } from '../../Layout';

const AppBarComponent = ({ children, value, setValue, reverse }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={`${styles.line} ${styles.lineTop}`} />
      <Container>
        <AppBar
          elevation={0}
          color="transparent"
          className={`${styles.appbar} ${reverse && 'appbarReverse'}`}
          position="static"
        >
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            {children}
          </Tabs>
        </AppBar>
      </Container>
      <div className={`${styles.line} ${styles.lineBottom}`} />
    </>
  );
};

export default AppBarComponent;
