
import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FrindList/FriendList'; 
import {Transactions} from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import friends from '../data/friends.json'       
import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div>
      <Profile 
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats} />
     <Statistics title="Upload stats" stats={data}/>
     <FriendList  friends={friends}/>
     <Transactions items={transactions}/>
    </div>

  );
};
