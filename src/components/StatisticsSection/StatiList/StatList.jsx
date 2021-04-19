import StatItem from '../StatItem/StatItem';
import styles from './StatList.module.css';

const StatList = ({ stats }) => {
  return (
    <ul className={styles.stat__list}>
      <StatItem stats={stats} />
    </ul>
  );
};

export default StatList;
