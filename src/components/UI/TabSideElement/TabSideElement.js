import styles from './TabSideElement.module.scss';

const TabSideElement = ({ children }) => {
  return <div className={`${styles.element} element`}>{children}</div>;
};

export default TabSideElement;
