export const FriendList = ({friends}) => {
    const newList = friends.map(item => {
        return <li key={item.id} className="item">
            <span className="status">{item.isOnline}</span>
            <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
            <p className="name">{item.name}</p>
        </li>
    })
    return <ul className="friend-list">
        {newList}
    </ul>
}