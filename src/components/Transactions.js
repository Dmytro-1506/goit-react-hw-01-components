import "./transactions.css"

export const TransactionHistory = ({ transactions }) => {
    const transactionsList = transactions.map(item => {
        return <tr key={item.id}>
            <th className='transaction-type'>{item.type}</th>
            <th>{item.amount}</th>
            <th>{item.currency}</th>
        </tr>
    })
    return <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactionsList}
        </tbody>
    </table>
};