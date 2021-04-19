import FriendListItem from '..//FriendListItem/FriendListItem';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendsList;
