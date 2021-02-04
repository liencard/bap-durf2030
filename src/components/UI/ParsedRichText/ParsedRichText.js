import styles from './ParsedRichText.module.scss';
import ReactHtmlParser from 'react-html-parser';

const ParsedRichText = ({ html }) => {
  return <div className={styles.text}>{ReactHtmlParser(html)}</div>;
};

export default ParsedRichText;
