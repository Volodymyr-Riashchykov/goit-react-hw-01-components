import './App.css';
import User from '../components/user/User';
import user from '../data/user.json'
import Statistic from '../components/statistics/Statistic';
import statisticalData from '../data/statistical-data.json';
import FriendList from '../components/friend/Friend'
import friends from '../data/friends.json'
import Transaction from '../components/transaction/Transaction';
import transactions from '../data/transactions.json';
function App() {
  return (
    <>
      <User
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stat={statisticalData} />
      <Statistic stat={statisticalData} />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </>
  );
}

export default App;
