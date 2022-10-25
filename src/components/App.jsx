
import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FrindList/FriendList'; 
import {Transactions} from './Transactions/Transactions';
import transactions from './data/transactions.json';
import friends from './data/friends.json'       
import userCard from './data/user.json';
import data from './data/data.json';

export const App = () => {
  return (
    <BrowserRouter basename="/oit-react-hw-01-componentsss/">
      <Profile 
       username={userCard.username}
       tag={userCard.tag}
       location={userCard.location} 
       avatar={userCard.avatar}
       followers={userCard.stats.followers}
       views={userCard.stats.views}
       likes={userCard.stats.likes} />
     <Statistics text="Upload stats" stats={data}/>
     <FriendList  friends={friends}/>
     <Transactions items={transactions}/>
    </BrowserRouter>

  );
};
