import "./transactions.css"

export const TransactionHistory = ({ items }) => {
    return <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => {
        return <tr key={item.id}>
            <th className='transaction-type'>{item.type}</th>
            <th>{item.amount}</th>
            <th>{item.currency}</th>
        </tr>
    })}
        </tbody>
    </table>
};