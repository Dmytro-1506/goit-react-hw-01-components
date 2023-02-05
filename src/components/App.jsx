import PropTypes from 'prop-types';
import user from '../data/user.json';
import { Profile } from "./profile/Profile";
import data from '../data/data.json';
import { Statistics } from './statistics/Statistics';
import friends from '../data/friends.json';
import { FriendList } from './friend-list/FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './transactions/Transactions';

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
      <Statistics title="Upload stats" dataList={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
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

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  dataList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }))
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool
    }))
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}