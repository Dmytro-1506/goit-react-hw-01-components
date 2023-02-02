import PropTypes from 'prop-types';
import user from './user.json';
import { Profile } from "./Profile";
import data from './data.json';
import { Statistics } from './Data';
import friends from './friends.json';
import { FriendList } from './Friends';
import transactions from './transactions.json';
import { TransactionHistory } from './Transactions';

export const App = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'rgb(230, 230, 230)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile userCard={user} />
      <Statistics dataList={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

Profile.propTypes = {
  userCard: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
    })
}