import styles from './Notification.module.scss';

const Notification = ({ notification }) => {
  return <p>{notification.text}</p>;
};
export default Notification;
