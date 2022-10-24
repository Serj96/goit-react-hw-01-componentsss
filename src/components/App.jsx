import {Profile} from './Profile/Profile';
import userCard from './data/data.json'

export const App = () => {
  return (
    <div>
    <Profile 
    username={userCard.username}
    tag={userCard.tag}
    location={userCard.location} 
    avatar={userCard.avatar}
    followers={userCard.stats.followers}
    views={userCard.stats.views}
    likes={userCard.stats.likes} />
    </div>
  );
};
