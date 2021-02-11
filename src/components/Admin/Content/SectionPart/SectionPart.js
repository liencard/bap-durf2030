import { observer } from 'mobx-react-lite';
import styles from './SectionPart.module.scss';

const SectionPart = observer(({ children, title }) => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <div>{children}</div>
      </section>
    </>
  );
});

export default SectionPart;
