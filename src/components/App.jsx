import Profile from './ProfileSection/Profile/Profile';

import user from './data/user.json';

const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default App;
