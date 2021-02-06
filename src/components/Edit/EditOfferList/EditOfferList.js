import styles from './EditOfferList.module.scss';

const EditOfferList = ({ offers, project }) => {
  return (
    <div className={styles.offers}>
      <div className={styles.offers__titles}>
        <p>Durvers</p>
        <p>Aangeboden hulp</p>
      </div>
      {offers.map((offer, i) => (
        <div key={i} className={styles.offer}>
          <div className={styles.user}>
            <img src={offer.durver.avatar} />
            <div className={styles.text}>
              <p>{offer.durver.name}</p>
              <p className={styles.date}>{project.getReadableDate(offer.timestamp)}</p>
            </div>
          </div>
          <ul>
            {offer.list.map((item, i) => (
              <li key={i}>
                {item.type === 'material' && <span className={styles.count}>{item.count}</span>}

                {item.name}
              </li>
            ))}
          </ul>
          <a href={`mailto:${offer.durver.email}`}>Contact</a>
        </div>
      ))}
    </div>
  );
};

export default EditOfferList;
