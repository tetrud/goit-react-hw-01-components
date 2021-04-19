import Profile from './ProfileSection/Profile/Profile';
import Statistics from './StatisticsSection/Statistics/Statistics';
import FriendList from './FriendsSection/FriendList/FriendList';
import TransactionHistory from './TransactionSection/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
