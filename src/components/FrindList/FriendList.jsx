import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem/FriendListItem';


export const FriendList = ({friends}) => {
    return <ul className="list">
        {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend}/>
        ))};
    </ul>
    
}

FriendList.prototype = {
    id: PropTypes.number.isRequired,
}

