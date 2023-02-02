import "./friends.css"

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

export const FriendList = ({ friends }) => {
    const newList = friends.map(item => {
        return <li key={item.id} className="card">
            <span style={{backgroundColor: statusColor(item.isOnline)}} className="status"></span>
            <img className="avatar" src={item.avatar} alt="User avatar" width="100" height="100" />
            <p className="name">{item.name}</p>
        </li>
    })
    return <ul className="friend-list">
        {newList}
    </ul>
}