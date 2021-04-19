import TransactionBody from '../TransactionBody/TransactionBody';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction__history}>
      <thead>
        <tr>
          <th>type</th>
          <th>amount</th>
          <th>currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionBody items={items} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;
