import styles from './Notification.module.scss';
import { ROUTES } from '../../../consts';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Notification = ({ notification }) => {
  const router = useRouter();

  const getText = (notification) => {
    switch (notification.type) {
      case 'badge':
        return (
          <p>
            Je hebt de{' '}
            <strong>
              level {notification.info.level} {notification.info.badge}
            </strong>{' '}
            badge verdiend! {notification.info.tag}
          </p>
        );
      case 'offer':
        return (
          <p>
            {notification.info.user.name} wilt vrijwilliger worden voor{' '}
            <strong>{notification.info.project.title}</strong>
          </p>
        );
      default:
        return 'Unknown step';
    }
  };

  const getLink = (notification) => {
    switch (notification.type) {
      case 'badge':
        return ROUTES.profile;
      case 'offer':
        return ROUTES.edit.to + notification.info.project.id;
      default:
        return 'Unknown step';
    }
  };

  const getImage = (notification) => {
    switch (notification.type) {
      case 'badge':
        return notification.info.image;
      case 'offer':
        return notification.info.user.avatar;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Link href={getLink(notification)}>
      <a className={`${styles.notification} ${!notification.read && styles.unread}`}>
        <img height="35px" width="35px" src={getImage(notification)} />
        <div className={styles.text}>
          {getText(notification)}
          <p className={styles.date}>{notification.timestamp}</p>
        </div>
      </a>
    </Link>
  );
};
export default Notification;
