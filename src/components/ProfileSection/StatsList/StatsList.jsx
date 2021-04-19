import PropTypes from 'prop-types';

import styles from './StatsList.module.css';

const StatsList = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      {Object.entries(stats).map(stat => (
        <li key={stat} className={styles.stats__item}>
          <span className={styles.label}>{stat[0]}</span>
          <span className={styles.quantity}>{stat[1]}</span>
        </li>
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default StatsList;
