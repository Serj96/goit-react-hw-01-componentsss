import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export const FriendListItem = ({friend}) => {
    return ( <li className={css.item} >
        <span className={`status ${friend.isOnline ? css.true : css.false}`} />
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
        </li>)
};

FriendListItem.prototype = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
