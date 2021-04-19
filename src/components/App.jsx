import Profile from './ProfileSection/Profile/Profile';
import Statistics from './StatisticsSection/Statistics/Statistics';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
    </>
  );
};

export default App;
