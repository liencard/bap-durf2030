import styles from './TabPanel.module.scss';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={styles.panel}
      {...other}
    >
      {/* {children} */}
      {value === index && <>{children} </>}
    </div>
  );
};

export default TabPanel;
