import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span
            className={friend.isOnline ? styles.online : styles.offline}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;
