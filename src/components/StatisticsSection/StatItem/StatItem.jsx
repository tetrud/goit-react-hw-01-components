import randomColor from '../randomColor';
import styles from './StatItem.module.css';

const StatItem = ({ stats }) => {
  return (
    <>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.stat__item}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </>
  );
};

export default StatItem;
