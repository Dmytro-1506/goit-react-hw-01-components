const statusColor = (value) => {
    switch (value) {
        case true: {
            return 'green'
        }
        case false: {
            return 'red'
        }
        default: {
            return 'blue'
        }
    }
}

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return <li className="card">
            <span style={{ backgroundColor: statusColor(isOnline) }} className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="100" height="100" />
            <p className="name">{name}</p>
        </li>
}