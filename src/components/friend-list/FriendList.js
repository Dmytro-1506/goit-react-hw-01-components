import "./friends.css"
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
        {friends.map(item => {
            return <FriendListItem  key={item.id} isOnline={item.isOnline} avatar={item.avatar} name={item.name}></FriendListItem>
        })}
    </ul>
}

