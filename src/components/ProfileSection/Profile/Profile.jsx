import Description from '../Description/Description.jsx';
import StatsList from '../StatsList/StatsList.jsx';
import styles from './Profile.module.css';

const Profile = ({ user: { avatar, name, tag, location, stats } }) => {
  return (
    <div className={styles.profile}>
      <Description avatar={avatar} name={name} tag={tag} location={location} />
      <StatsList stats={stats} />
    </div>
  );
};

export default Profile;
