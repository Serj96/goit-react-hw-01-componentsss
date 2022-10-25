import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem/FriendListItem';


export const FriendList = ({friends}) => {
    return <ul className="list">
        {friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
        ))};
    </ul>
    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired, 
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired, 
        })
    ).isRequired,
}

